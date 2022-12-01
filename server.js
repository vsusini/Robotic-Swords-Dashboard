const express = require('express');
const request = require('request');
const path = require('path');
const cors = require('cors')
const port = process.env.PORT || 4500;
var bodyParser = require('body-parser')
const app = express();
const publicPath = path.join(__dirname, "/dist/rs-dashboard/")
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// middle ware
app.use(express.static(publicPath));
app.use(express.static('public')); //to access the files in public folder
app.use(cors()); // it enables all cors requests

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/getAccount', (req, res) => {
    request(
      { url: 'http://public-api.solscan.io/account/' + req.body.wallet},
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
  });

app.listen(port, () => {
    console.log('server is running at port ' + port);
})
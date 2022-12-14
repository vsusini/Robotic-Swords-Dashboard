# Basing our production version on Alpine Linux to reduce both image size
# and attack surface (I hope).  Please note that the actual version of node
# and alpine can change over time - two builds at different times are note
# guaranteed to be the same.

FROM node:14-alpine

# These environment variables can override the execution environment in the
# container - configure them with the actual values in the running environment

# Create the application directory in the container

WORKDIR /usr/src/app

# Deploy the application into the container

COPY . .

# Install dependencies, build the application, and then remove any build-only
# artifacts

RUN npm install && npm run build && npm prune --production

EXPOSE 80
EXPOSE 4500

# Execute the API

ENTRYPOINT ["npm", "run", "start"]

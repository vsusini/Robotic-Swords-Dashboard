import { Component, Input } from '@angular/core';

@Component({
  selector: 'two-level-card',
  templateUrl: './two-level-card.component.html',
  styleUrls: ['./two-level-card.component.css']
})
export class TwoLevelCardComponent {

  @Input()
  title = ''

  @Input()
  secondTitle = ''

  @Input()
  content = ''

  @Input()
  secondContent = ''
  
}

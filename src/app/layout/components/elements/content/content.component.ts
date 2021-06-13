import {Component, Input} from '@angular/core';

@Component({
  selector: 'slm-content, [slm-content]',
  templateUrl: 'content.component.html'
})
export class SlmContentComponent {

  @Input()
  hasContentAside: boolean = true;

  @Input()
  hasHeaderAside: boolean = true;

}

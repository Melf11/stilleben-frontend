import {Component, Input} from '@angular/core';

@Component({
  selector: 'slm-layout, [slm-layout]',
  templateUrl: 'layout.component.html'
})
export class SlmLayoutComponent {

  @Input()
  hasSidebar = true;

  @Input()
  hasAlerts = true;

  @Input()
  hasHeader = true;

  @Input()
  hasHero = true;

  @Input()
  hasContent = true;

  @Input()
  hasFooter = true;

}

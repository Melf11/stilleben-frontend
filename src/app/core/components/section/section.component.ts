import {Component, HostBinding, Input} from '@angular/core';
import {SectionInterface} from '../../interfaces/section.interface';
import {Animations} from "../../../layout/utils/animations";

@Component({
  selector: 'slm-section-component',
  templateUrl: 'section.component.html',
  animations: [
    Animations.fadeInOut
  ]
})
export class SlmSectionComponent {

  @Input()
  section: SectionInterface | undefined;

  @HostBinding('class') class = 'slm-section';
}

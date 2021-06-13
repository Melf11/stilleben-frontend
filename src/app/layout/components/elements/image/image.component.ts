import {Component, HostBinding, Input, OnInit, TemplateRef} from '@angular/core';
import {RfxParallaxService} from "rfx-parallax";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {Animations} from "../../../utils/animations";
import {Bem} from "../../../utils/bem";

@Component({
  selector: 'slm-image, slm-img, [slm-image], [slm-img]',
  templateUrl: 'image.component.html',
  animations: [
    Animations.fadeInOut
  ]
})
export class SlmImageComponent implements OnInit {

  baseClass = 'slm-image';

  @Input()
  smallUrl: string | undefined;

  @Input()
  largeUrl: string | undefined;

  @Input()
  alt: string | undefined;

  @Input()
  lazyLoadOffset: number = 150;

  @Input()
  size: string | undefined = undefined;

  modalRef: BsModalRef | undefined;
  parallaxActive = false;

  @HostBinding('class')
  get hostClasses(): string {
    const bem = new Bem(this.baseClass);
    return bem.setMods(this.baseClass, [
      bem.setModifier(this.size!),
    ]);
  }

  constructor(
    private rfxParallaxService: RfxParallaxService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {

    this.rfxParallaxService.initListeners();
  }

  activateParallax(event: any) {
     this.parallaxActive = event;
  }


  openLightbox(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: '', ignoreBackdropClick: false});
  }


  closeModal(): void {
    this.modalRef?.hide();
  }
}

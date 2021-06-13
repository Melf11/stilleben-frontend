import {
    ComponentFactoryResolver,
    Directive,
    ElementRef,
    Inject,
    Input, OnChanges, OnInit,
    Renderer2, SimpleChanges, ViewContainerRef
} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {SlmLoadingComponent} from "../components/elements/loading/loading.component";

@Directive({
    selector: '[loading], loading'
})
export class LoadingDirective implements OnInit, OnChanges {

    baseClass = 'loading-element';
    loaderChild: any;

    @Input()
    isLoading: boolean = false;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: any,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
    ) {
        const factory = this.componentFactoryResolver.resolveComponentFactory(SlmLoadingComponent);
        const componentRef = this.viewContainerRef.createComponent(factory);
        this.loaderChild = componentRef.injector.get(SlmLoadingComponent).elementRef.nativeElement;
    }

    ngOnInit() {
        (this.elementRef.nativeElement as HTMLElement).classList.add(this.baseClass);
        this.addOrRemoveLoader();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.addOrRemoveLoader();
    }

    addOrRemoveLoader() {
        if (this.isLoading) {
            this.renderer.appendChild(this.viewContainerRef.element.nativeElement, this.loaderChild);
            (this.elementRef.nativeElement as HTMLElement).classList.add(this.baseClass + '--is-loading');
        } else {
            this.renderer.removeChild(this.viewContainerRef.element.nativeElement, this.loaderChild);
            (this.elementRef.nativeElement as HTMLElement).classList.remove(this.baseClass + '--is-loading');
        }
    }
}

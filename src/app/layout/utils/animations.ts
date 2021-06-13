import {trigger, style, transition, animate, state} from '@angular/animations';

export const Animations = {
  slideRightOut: trigger('slideRightOut', [
    state('void', style({transform: 'translateY(-100%)', opacity: 0})),

    transition('void => *', [
      animate('333ms ease', style({transform: 'translateY(0)', opacity: 1})),
    ]),
    transition('* => void', [
      animate('333ms ease', style({transform: 'translateX(100%)', opacity: 0})),
      animate('333ms ease', style({maxHeight: '0'}))
    ])
  ]),
  hideEnterAnimation: trigger('hideEnterAnimation', [
    transition(':enter', [])
  ]),
  fadeHeightInOut: trigger('fadeHeightInOut', [
    transition(':enter', [
      style({opacity: '0', height: '0', 'padding-top': '0', 'padding-bottom': '0'}),
      animate('333ms ease-in', style({opacity: '1', height: '*', 'padding-top': '*', 'padding-bottom': '*'}))
    ]),
    transition(':leave', [
      style({opacity: '1', height: '*', 'padding-top': '*', 'padding-bottom': '*'}),
      animate('333ms ease-out', style({opacity: '0', height: '0', 'padding-top': '0', 'padding-bottom': '0'}))
    ])
  ]),
  fadeInOut: trigger('fadeInOut', [
    transition(':enter', [
      style({opacity: '0'}),
      animate('333ms ease', style({opacity: '1'}))
    ]),
    transition(':leave', [
      style({opacity: '1'}),
      animate('333ms ease', style({opacity: '0'}))
    ])
  ]),
  halfFadeInOut: trigger('halfFadeInOut', [
    transition(':enter', [
      style({opacity: '0'}),
      animate('333ms ease', style({opacity: '.5'}))
    ]),
    transition(':leave', [
      style({opacity: '.5'}),
      animate('333ms ease', style({opacity: '0'}))
    ])
  ]),
  fadeWidthOut: trigger('fadeWidthOut', [
    transition(':leave', [
      style({width: '*', opacity: '1'}),
      animate('333ms ease', style({width: '0', opacity: '0'}))
    ])
  ]),
  showNavLinkBackwards: trigger('showNavLinkBackwards', [
    transition(':enter', [
      style({opacity: '0', transform: 'translateX(-90px)'}),
      animate('333ms ease', style({opacity: '1', transform: 'translateX(-130px)'}))
    ]),
    transition(':leave', [
      style({opacity: '1', transform: 'translateX(-130px)'}),
      animate('333ms ease', style({opacity: '0', transform: 'translateX(-90px)'}))
    ])
  ]),
  showNavLinkForwards:
    trigger('showNavLinkForwards', [
      transition(':enter', [
        style({opacity: '0', transform: 'translateX(90px)'}),
        animate('333ms ease', style({opacity: '1', transform: 'translateX(130px)'}))
      ]),
      transition(':leave', [
        style({opacity: '1', transform: 'translateX(130px)'}),
        animate('333ms ease', style({opacity: '0', transform: 'translateX(90px)'}))
      ])
    ])
}

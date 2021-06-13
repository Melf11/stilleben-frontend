import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import 'scroll-behavior-polyfill';
import {SlmModule} from './app/slm.module';


if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(SlmModule)
    .catch(err => console.error(err));
});

if (localStorage.getItem('slm-color-scheme')) {
  document.documentElement.dataset.theme = localStorage.getItem('slm-color-scheme') as string;
} else {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.dataset.theme = 'theme-dark';
  } else {
    document.documentElement.dataset.theme = 'theme-light';
  }
}


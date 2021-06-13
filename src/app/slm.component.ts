import {Component, OnInit} from '@angular/core';
import {defineLocale, deLocale} from 'ngx-bootstrap/chronos';
import {environment} from '../environments/environment';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'slm-root',
  templateUrl: './slm.component.html'
})
export class SlmComponent implements OnInit {
  title = environment.title;
  currentTranslation = 'de';
  isLoading = false;


  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
  }


  ngOnInit() {
    this.isLoading = true;

    defineLocale('de', deLocale);
    this.translate.use(environment.defaultLocale).subscribe(() => {
      this.currentTranslation = this.translate.currentLang;
      this.isLoading = false;
    });

  }
}

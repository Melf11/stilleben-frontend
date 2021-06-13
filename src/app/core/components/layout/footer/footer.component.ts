import {Component, HostBinding, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavigationService} from '../../../services/navigation.service';
import {TranslateService} from '@ngx-translate/core';
import {environment} from "../../../../../environments/environment";

@Component({
    selector: 'slm-footer-component',
    templateUrl: 'footer.component.html'
})
export class SlmFooterComponent implements OnInit {
  @HostBinding('class') class = 'slm-footer';

  isLoading = false;

  currentYear: number | undefined;

  _environment = environment;

  constructor(
    private router: Router,
    public navigationService: NavigationService,
    public translateService: TranslateService,
  ) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
    this.isLoading = true;
  }

  sectionId(sectionTitle: string): string {
    return sectionTitle.replace(/\s/g, '').toLowerCase();
  }
}

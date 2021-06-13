import {Component, Input} from '@angular/core';
import {Animations} from "../../../utils/animations";
import {AlertInterface} from "../../../interfaces/alert.interface";
import {AlertService} from "../../../services/alert.service";

@Component({
  selector: 'slm-alert, [slm-alert]',
  templateUrl: './alert.component.html',
  animations: [
    Animations.slideRightOut
  ]
})
export class SlmAlertComponent {

  @Input()
  closeable = false;

  @Input()
  isAlertBox = false;

  @Input()
  timeout = 6500;

  public _alerts: Array<AlertInterface> = [];

  get alert() {
    return this._alerts[this._alerts.length - 1];
  }

  constructor(private _alertService: AlertService) {
    this._alertService.alert$.subscribe(_alert => {
      this._alerts.push(_alert);
    });
  }

  removeAlert(alert: AlertInterface) {
    this._alerts = this._alerts.filter(obj => obj !== alert);
  }

  removeAlertWithTimeout(alert: AlertInterface) {
    setTimeout(() => {
      this._alerts = this._alerts.filter(obj => obj !== alert);
    }, this.timeout);
  }

}

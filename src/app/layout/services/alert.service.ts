
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {AlertInterface} from "../interfaces/alert.interface";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alert$: Subject<AlertInterface> = new Subject<AlertInterface>();
  constructor() {}
}

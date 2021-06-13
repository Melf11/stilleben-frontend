import { ErrorServiceInterface } from './error.interface';
import { Subject } from 'rxjs';

export abstract class ErrorServiceAbstract implements ErrorServiceInterface {
  abstract propertyError: Subject<{ property_path: string; message: string }>;
  abstract error: Subject<string>;
}

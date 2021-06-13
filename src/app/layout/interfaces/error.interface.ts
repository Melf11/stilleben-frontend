
import { Subject } from 'rxjs';

export declare interface ErrorServiceInterface {
  propertyError: Subject<{ property_path: string, message: string }>;
  error: Subject<string>;
}

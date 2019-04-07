import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<any>('toastr library');

export interface Toastr {
  success(message: string, title?: string);
  info(message: string, title?: string);
  warning(message: string, title?: string);
  error(message: string, title?: string);
}
// export interface Toastr {
//   success(message: string, )
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class ToastrService {

//   constructor() { }

//   Success(message: string, title?: string) {
//     toastr.success(message, title);
//   }
//   Info(message: string, title?: string) {
//     toastr.info(message, title);
//   }
//   Warning(message: string, title?: string) {
//     toastr.warning(message, title);
//   }
//   Error(message: string, title?: string) {
//     toastr.error(message, title);
//   }

// }

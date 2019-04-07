import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<any>('toastr library');

export interface Toastr {
  success(message: string, title?: string);
  info(message: string, title?: string);
  warning(message: string, title?: string);
  error(message: string, title?: string);
}


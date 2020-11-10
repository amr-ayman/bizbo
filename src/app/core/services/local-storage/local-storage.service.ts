import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  /* Create New Local Storage Item */
  setLocal(key: string, value: any): void {
    const uaqKey = 'bizbo-' + key;
    const data = value === undefined ? '' : JSON.stringify(value);
    window.localStorage.setItem(uaqKey, data);
  }

  /* Get Specific Local Storage Item */
  getLocal(key: string): any {
    const uaqKey = 'bizbo-' + key;
    const data = window.localStorage.getItem(uaqKey);
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

  /* Remove Specific Local Storage Item */
  removeLocal(key: string): void {
    const uaqKey = 'bizbo-' + key;
    window.localStorage.removeItem(uaqKey);
  }

  /* Remove All Local Storage Items */
  removeAllLocals(): void {
    for (const key in window.localStorage) {
      if (window.localStorage.hasOwnProperty(key)) {
        window.localStorage.removeItem(key);
      }
    }
  }
}

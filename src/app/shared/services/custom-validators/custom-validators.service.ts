import {AbstractControl, ValidationErrors} from '@angular/forms';
import validator from 'validator';

export class CustomValidators {

  // Check If Input Contains English Characters Only
  static isAlphanumeric(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const value = control.value.trim() as string;
    const isValidAlphanumeric = value.split(' ').every((word) => validator.isAlphanumeric(word, 'en-US'));
    if (value && !isValidAlphanumeric) {
      return {notAlphaNum: true};
    }
    return null;
  }

  // Check If Input Contains Valid Password
  static isPassword(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const value = control.value.trim();
    const passwordRegex = '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,10})';
    if (value && !validator.matches(value, passwordRegex)) {
      return {invalidPassword: true};
    }
    return null;
  }
}

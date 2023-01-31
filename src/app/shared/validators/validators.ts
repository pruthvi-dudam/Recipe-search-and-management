import { FormControl, FormGroup } from '@angular/forms';

export interface ValidationResult {
  [key: string]: boolean;
}

export class UserNameValidator {
  public static valid(control: FormControl): ValidationResult {
    let hasSpecialCharacters = /[$&+,:;=?@#|'<>.^*()%!-]/.test(control.value);
    let hasDigit = /[0-9]+/.test(control.value);

    const notValid = hasSpecialCharacters || hasDigit;
    if (control.value && notValid) {
      return { invalidUserName: true };
    }
    return null;
  }
}

export class PasswordValidator {
  public static valid(control: FormControl): ValidationResult {
    let hasSpecialCharacters = /[^a-zA-Z0-9]/.test(control.value);
    let hasDigit = /[0-9]+/.test(control.value);
    let hasChar = /[a-zA-Z]+/.test(control.value);
    let inRange = /.{8,20}/.test(control.value);
    // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
    const notValid = hasSpecialCharacters || !inRange || !(hasDigit && hasChar);
    if (control.value && notValid) {
      // return what´s not valid
      return { invalidPassword: true };
    }
    return null;
  }
}

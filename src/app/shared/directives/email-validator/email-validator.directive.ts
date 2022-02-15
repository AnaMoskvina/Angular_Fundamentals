import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';
import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return EMAIL_REGEX.test(control.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  };
}

@Directive({
  selector: '[appValidEmail]',
  providers: [ {provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true} ]
})
export class EmailValidatorDirective implements Validator {

  @Input('appValidEmail') validEmail = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validEmail ? null : emailValidator()(control);
  }

}

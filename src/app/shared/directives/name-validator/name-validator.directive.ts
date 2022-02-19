import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';
import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

// TODO: consider refactoring, basically the same as email directive, but with other regex

export function nameValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    const NAME_REGEX = /^[a-z0-9]+$/i;
    return NAME_REGEX.test(control.value) ? null : {
      validateName: {
        valid: false
      }
    };
  };
}

@Directive({
  selector: '[appValidName]',
  providers: [ {provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true} ]
})
export class NameValidatorDirective implements Validator {

  @Input('appValidName') validName = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validName ? null : nameValidator()(control);
  }

}

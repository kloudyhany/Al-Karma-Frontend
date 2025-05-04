import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function notmatching(passwordKey: string, confirmPasswordKey: string): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    const passwordControl = form.get(passwordKey);
    const confirmPasswordControl = form.get(confirmPasswordKey);

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;

    if (password !== confirmPassword) {
      confirmPasswordControl.setErrors({ notMatching: true });
    } else {
      if (confirmPasswordControl.hasError('notMatching')) {
        confirmPasswordControl.setErrors(null);
      }
    }

    return null;
  };
}

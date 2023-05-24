import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(): ValidationErrors | null {
  console.log('coucou');
  
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordRegex = RegExp('(?=.*[A-Z])');
    const valid = passwordRegex.test(control.value);

    const errors = {
      password: {
        rules: 'doit contenit au moins une majuscule',
      },
    };

    return !valid ? errors : null;
  };
}
export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {

  const valid = control.value.includes('@');

  const errors = {
    email: {
      rules: "N'est pas au format email",
    },
  };

  return !valid ? errors : null;
}

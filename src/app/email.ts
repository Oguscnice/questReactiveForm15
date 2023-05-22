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

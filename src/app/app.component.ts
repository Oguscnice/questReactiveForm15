import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public fb: FormBuilder) {}

  userForm = this.fb.group({
    credentials: this.fb.group({
      email: [''],
      password: [''],
    }),
  });

  onSubmit() {
    console.log(this.userForm.value);
  }
}

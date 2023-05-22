import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public fb: FormBuilder) {}

  submit: boolean = false;

  userForm = this.fb.group({
    username: [''],
    email: [''],
    password: [''],
    street: [''],
    zip: [''],
    city: [''],
  });

  onSubmit() {
    this.submit = true;
    console.log(this.userForm.value);
    
  }
}

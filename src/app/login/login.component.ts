import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  inresoFrom!: FormGroup;
  constructor(private fb: FormBuilder) {
    
    
    this.inresoFrom = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  login() {
    console.log('logeando ...');
  }
}

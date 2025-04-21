import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule, // Nécessaire pour formGroup et formControlName
    MatFormFieldModule, // Pour mat-form-field
    MatInputModule, // Pour matInput
    MatButtonModule, // Pour mat-button
    MatCardModule, // Pour mat-card (si utilisé)
    MatError,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);

  loginFormGroup: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  invalidCredentials = false;
  login() {}
}

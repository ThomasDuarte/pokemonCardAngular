import { Component, inject, OnDestroy } from '@angular/core';
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
import { Credentials, LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';
import { User } from '../../models/user.model';

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
export class LoginComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe;
  }
  private formBuilder = inject(FormBuilder);
  private loginService = inject(LoginService);

  private loginSubscription: Subscription | null = null;

  private router = inject(Router);
  loginFormGroup: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  invalidCredentials = false;
  login() {
    this.loginSubscription = this.loginService
      .login(this.loginFormGroup.value as Credentials)
      .subscribe({
        next: (result: User | null | undefined) => {
          this.navigateHome();
        },
        error: (error) => {
          this.invalidCredentials = true;
        },
      });
  }
  navigateHome() {
    this.router.navigate(['home']);
  }
}

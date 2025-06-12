import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'praxis-singup',
  imports: [TranslatePipe, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.scss'
})
export class SingupComponent {
  private router = inject(Router);
  private userService = inject(UserService);

  signup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  onLogin() {
    this.router.navigate(['/login']);
  }

  onSignup() {
    if (this.signup.value.email === '' || this.signup.value.password === '' || this.signup.value.firstName === '' || this.signup.value.lastName === '') {
      return;
    }

    this.userService.putUser({
      firstName: this.signup.value.firstName?.toString(),
      lastName: this.signup.value.lastName?.toString(),
      email: this.signup.value.email?.toString(),
      password: this.signup.value.password?.toString()
    });
    this.router.navigate(['/login']);
  }
}

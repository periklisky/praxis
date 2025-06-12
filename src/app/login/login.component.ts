import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from '../services/user.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'praxis-login',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, TranslatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private router = inject(Router);
  private userService = inject(UserService);

  email: string = '';
  password: string = '';
  users: Array<User> = this.userService.getUsers();

  onLogin() {
    if (this.email === '' || this.password === '') {
      return;
    }

    const user = { email: this.email, password: this.password };
    if (this.userService.exists(user))
      this.router.navigate(['']);
  }

  onForgot() {
    this.router.navigate(['/recover']);
  }

  onSignup() {
    this.router.navigate(['/signup']);
  }
}

import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'praxis-reset',
  imports: [TranslatePipe, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent {
  userService: UserService = inject(UserService);
  router: Router = inject(Router);

  reset = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  isSubmitted = false;

  onCancel() {
    this.router.navigate(['/login']);
  }

  onReset() {
    this.isSubmitted = true;
    this.userService.resetUser(this.reset.get('email')?.value);
  }
}

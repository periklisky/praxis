import { Component } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'praxis-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [TranslatePipe]
})
export class HeaderComponent {
}

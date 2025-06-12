import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'praxis-home',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private router = inject(Router);

  languages: string[] = ['en', 'sp'];
  selectedLanguage: string = 'en';
  backgroundImageUrl = '../../assets/images/';


  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang(this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
  }


  onSelectLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(this.selectedLanguage);
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}

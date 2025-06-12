import { Component } from '@angular/core';
import { WhereToFindUsComponent } from './where-to-find-us/where-to-find-us.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';
import { ScheduleComponent } from './schedule/schedule.component';

@Component({
  selector: 'praxis-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [
    WhereToFindUsComponent,
    ContactComponent,
    InfoComponent,
    ScheduleComponent,
  ],
})
export class FooterComponent {}

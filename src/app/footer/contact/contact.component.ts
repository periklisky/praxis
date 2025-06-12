import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'praxis-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [NgForOf, CommonModule],
})
export class ContactComponent {
  title: string = 'Get in touch';
  contactMethods = [
    { type: 'phone', value: '+1234567890' },
    { type: 'email', value: 'doctor@gmail.com' },
  ];
}

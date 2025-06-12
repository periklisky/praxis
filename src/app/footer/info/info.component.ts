import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'praxis-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  imports: [NgForOf],
})
export class InfoComponent {
  title: string = 'General info';
  address: string = 'Borivoja Gojkovića 10, Niš, Serbia';
  doctors: string[] = ['Dr Veljko Nikolic', 'Dr Yukimitsu Miyakawa'];
  text: string = 'We take care of public or private insured patients';
}

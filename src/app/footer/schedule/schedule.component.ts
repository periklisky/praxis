import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'praxis-opening-hours',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
  imports: [NgForOf],
})
export class ScheduleComponent {
  title: string = 'Opening hours';
  openingHours = [
    { day: 'Mo', hours: ['08:00 - 14:00', '17:00 - 21:00'] },
    { day: 'Tu', hours: ['06:00 - 14:00'] },
    { day: 'We', hours: ['06:00 - 14:00', '17:00 - 21:00'] },
    { day: 'Th', hours: ['06:00 - 14:00'] },
    { day: 'Fr', hours: ['06:00 - 14:00'] },
    { day: 'Sa', hours: ['08:00 - 14:00'] },
  ];
}

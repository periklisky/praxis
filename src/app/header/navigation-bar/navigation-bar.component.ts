import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'praxis-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  imports: [RouterLink, NgForOf],
})
export class NavigationBarComponent {
  links: string[] = ['info', 'profile', 'opening hours'];
}

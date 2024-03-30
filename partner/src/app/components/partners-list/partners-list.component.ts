import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { Partner } from 'src/app/models/partner';

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.scss'],
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    DatePipe
  ]
})
export class PartnersListComponent {
  partners: Partner[] = [
    {
      name: "Teste",
      description: "Teste",
      createdAt: new Date(),
      clients: [],
      projects: [],
      id: 1
    }

  ];
}

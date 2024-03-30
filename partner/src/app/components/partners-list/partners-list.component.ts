import { Component, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { IPartner } from 'src/app/models/partner';

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.scss'],
})
export class PartnersListComponent implements OnInit{
  ngOnInit () {}

  partners: IPartner[] = [
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

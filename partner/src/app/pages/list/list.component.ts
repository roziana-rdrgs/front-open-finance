import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { PartnersListComponent } from 'src/app/components/partners-list/partners-list.component';
import { IPartner } from 'src/app/models/partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [
    AppModule
  ]
})
export class ListComponent implements OnInit{

  public partners: IPartner[] = [];
  constructor(
    private partnerService: PartnerService
  ){

  }
  ngOnInit(): void {
    this.partnerService.getAll().subscribe(
      data => {
        this.partners = data;
      }
    )
  }

}

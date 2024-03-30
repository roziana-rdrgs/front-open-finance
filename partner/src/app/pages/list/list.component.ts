
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Partner } from 'src/app/models/partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements AfterViewInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public partners: Partner[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'clients', 'projects' ];
  dataSource = new MatTableDataSource<Partner>(this.partners);

  constructor(
    private partnerService: PartnerService
  ){

  }

  async ngAfterViewInit() {
    this.partnerService.getAll().subscribe(
      data => {
        this.partners = data;
        this.dataSource.data = this.partners;
      }
    );
    this.dataSource.paginator = this.paginator;
    console.log(this.partners)
  }


}

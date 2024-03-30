import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { PartnersListComponent } from 'src/app/components/partners-list/partners-list.component';



@NgModule({
  declarations: [
    ListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
  ]
})
export class ListModule { }

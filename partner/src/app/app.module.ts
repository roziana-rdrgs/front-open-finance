import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartnersListComponent } from './components/partners-list/partners-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PartnersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    PartnersListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

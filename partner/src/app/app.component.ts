import { Component, OnInit } from '@angular/core';
import { AppConfig } from './app.config';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  userEmail: string = "";
  constructor(
    private config: AppConfig,
    private cookieService: CookieService
  ) {
  }

  ngOnInit(): void {
    this.userEmail = this.cookieService.get('userEmail');
  }

  onExit(){
    window.location.assign(this.config.loginUrl);
  }
}

import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from "@angular/core";
import { AppConfig } from "./app.config";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  userEmail: string = "";
  url: SafeResourceUrl;
  navigate = false;
  constructor(
    private config: AppConfig,
    private cookieService: CookieService,
    private domSanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.userEmail = this.cookieService.get('userEmail');
  }

  onExit(){
    window.location.assign(this.config.loginDeepLink);
  }

  openPartners(){
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.config.partnerDeepLink);
    this.navigate = true;
  }
}

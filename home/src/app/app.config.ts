import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })

export class AppConfig {
  public loginDeepLink = "http://localhost:3000/";
  public partnerDeepLink = "http://localhost:4200/";
}

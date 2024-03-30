import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class AppConfig {
  public loginUrl = 'http://localhost:3000/'
  public partnerApiBaseUrl = 'https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/1';
}

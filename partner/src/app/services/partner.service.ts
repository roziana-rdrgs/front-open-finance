import { IPartner } from './../models/partner';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './../app.config';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PartnerService {

  constructor(
    private config: AppConfig,
    private http: HttpClient
  ) {
  }

  getAll(): Observable<IPartner[]> {
    const url = `${this.config.partnerApiBaseUrl}`;
    return this.http.get<IPartner[]>(url);
  }

  getById(id: number): Observable<IPartner> {
    const url = `${this.config.partnerApiBaseUrl}/${id}`;
    return this.http.get<IPartner>(url);
  }

  update(id: number, partner: IPartner): Observable<IPartner> {
    const url = `${this.config.partnerApiBaseUrl}/${id}`;
    return this.http.put<IPartner>(url, partner);
  }

  create(id: number, partner: IPartner): Observable<IPartner> {
    const url = `${this.config.partnerApiBaseUrl}/${id}`;
    return this.http.post<IPartner>(url, partner);
  }


  delete(id: Number): Observable<IPartner> {
    const url = `${this.config.partnerApiBaseUrl}/${id}`;
    return this.http.delete<IPartner>(url);
  }
}

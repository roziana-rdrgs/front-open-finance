import { Partner } from './../models/partner';
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

  getAll(): Observable<Partner[]> {
    const url = `${this.config.partnerApiBaseUrl}`;
    console.log(url);
    return this.http.get<Partner[]>(url);
  }

  getById(id: number): Observable<Partner> {
    const url = `${this.config.partnerApiBaseUrl}/${id}`;
    return this.http.get<Partner>(url);
  }

  update(id: number, partner: Partner): Observable<Partner> {
    const url = `${this.config.partnerApiBaseUrl}/${id}`;
    return this.http.put<Partner>(url, partner);
  }

  create(id: number, partner: Partner): Observable<Partner> {
    const url = `${this.config.partnerApiBaseUrl}/${id}`;
    return this.http.post<Partner>(url, partner);
  }


  delete(id: Number): Observable<Partner> {
    const url = `${this.config.partnerApiBaseUrl}/${id}`;
    return this.http.delete<Partner>(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PhoneItem } from './phone-item';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private phonesUrl = 'http://localhost:3000/get';
  constructor(private http: HttpClient) { 
  }
  getPhoneItems(): Observable<PhoneItem[]>{
    return this.http.get<PhoneItem[]>(this.phonesUrl)
  }
}

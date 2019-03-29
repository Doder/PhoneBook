import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PhoneItem } from './phone-item';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private phonesUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { 
  }
  getPhoneItems(): Observable<PhoneItem[]>{
    return this.http.get<PhoneItem[]>(this.phonesUrl + '/get');
  }
  deletePhoneItem(id: string): Observable<PhoneItem[]>{
    return this.http.delete<PhoneItem[]>(this.phonesUrl + '/delete/' + id);
  }
  addPhoneItem(item: PhoneItem): Observable<PhoneItem>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<PhoneItem>(this.phonesUrl + '/post', item, httpOptions);
  }
}

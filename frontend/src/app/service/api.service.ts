import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = '';
  constructor(private http: HttpClient) {
   this.baseUrl = 'http://localhost:1010'
    // this.baseUrl = 'https://api-shorturl.twentyninecarrent.com'
     //this.baseUrl = 'https://shorurl.herokuapp.com'
    
  }

  genShort_URL = (_urlLong: string): Observable<any> => {
    let urlApi = "/api/urlshorten/genShortURL";

    const body = { longUrl: _urlLong };
    return this.http.post(this.baseUrl + urlApi, body)
  };
  findShort_CODE= (_urlLong: string): Observable<any> => {
    let urlApi = "/api/urlshorten/"+_urlLong;
    return this.http.get(this.baseUrl + urlApi)
  };
}

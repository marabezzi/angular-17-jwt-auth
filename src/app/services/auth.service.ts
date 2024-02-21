import { URL_API } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      URL_API + 'auth/signin',
      {
        'email': email,
        'password': password
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(URL_API + 'signout', { }, httpOptions);
  }
}

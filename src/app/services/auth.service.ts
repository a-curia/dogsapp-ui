import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginPath = environment.apiUrl + 'login';

  constructor(private http: HttpClient) { }

  login(payload): Observable<any>{
    this.http.post(this.loginPath, payload);
  }
}

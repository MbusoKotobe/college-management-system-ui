import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/IUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public login(user: IUser): Observable<IUser>
  {
      return this.http.post<any>(`${this.apiServiceUrl}user/login`, user);
  }

  public signup(user: IUser): Observable<IUser>
  {
      return this.http.post<any>(`${this.apiServiceUrl}user/signup`, user);
  }
}

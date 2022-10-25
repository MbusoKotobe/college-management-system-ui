import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IModule} from "../models/IModule.model";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('module-admin:721087c4-0ede-407e-8c1f-ac57e531f299')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getModules(): any
  {
    return this.http.get<IModule[]>(`${this.apiServiceUrl}module/find-all`, httpOptions);
  }
}

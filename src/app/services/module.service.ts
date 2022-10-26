import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IModule} from "../models/IModule.model";
<<<<<<< HEAD
=======
import {IFaculty} from "../models/IFaculty.model";
>>>>>>> b1dd850dba7f67854722a615b8b9a34518c6bdf0
import {Observable} from "rxjs";


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

  private apiServiceUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  addModulex(modulex: IModule): Observable<IModule>
  {
    return this.http.post<any>(`${this.apiServiceUrl}module/save`, modulex, httpOptions);
  }


  getModulex(moduleId: string): Observable<IModule>
  {
    return this.http.get<IModule>(`${this.apiServiceUrl}module/read/facultyId=${moduleId}`, httpOptions);
  }

  getModules(): any
  {
    return this.http.get<IModule[]>(`${this.apiServiceUrl}module/find-all`, httpOptions);
  }

  removeModulex(moduleId: string): any
  {
    return this.http.delete<any>(`${this.apiServiceUrl}module/delete/${moduleId}`, httpOptions);
  }
  // public deleteLecturer(lecturerId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiServerUrl}lecturer/delete/${lecturerId}`)
  // }
}


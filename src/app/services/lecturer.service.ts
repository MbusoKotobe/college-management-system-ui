import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment";
import {ILecturer} from "../models/ILecturer.model";
import { HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('lecturer-admin:721087c4-0ede-407e-8c1f-ac57e531f293')
  })
};

@Injectable({ providedIn: 'root' })
export class LecturerService {
  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  addLecturer(lecturer: ILecturer): Observable<ILecturer>
  {
    return this.http.post<any>(`${this.apiServiceUrl}lecturer/save`, lecturer, httpOptions);
  }

  getLecturer(lecturerId: number): Observable<ILecturer>
  {
    return this.http.get<ILecturer>(`${this.apiServiceUrl}lecturer/read/lecturerId=${lecturerId}`, httpOptions);
  }

  getLecturers(): any
  {
    return this.http.get<ILecturer[]>(`${this.apiServiceUrl}lecturer/find-all`, httpOptions);
  }

  removeLecturer(shift: ILecturer): any
  {
    return this.http.delete<any>(`${this.apiServiceUrl}lecturer/delete`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('lecturer-admin:721087c4-0ede-407e-8c1f-ac57e531f293')
      }),
      body: shift,
    });
  }
}

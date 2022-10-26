import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IStudent } from "../models/IStudent.model";
import { HttpHeaders } from "@angular/common/http";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('student-admin:721087c4-0ede-407e-8c1f-ac57e531f295')
  })
};

@Injectable({ providedIn: 'root' })
export class StudentServices
{
  private apiServiceUrl = environment.apiBaseUrl;

  constructor (private http: HttpClient)
  { }

  addStudent(student: IStudent): Observable<IStudent>
  {
    return this.http.post<any>(`${this.apiServiceUrl}student/save`, student, httpOptions);
  }

  getStudent(studentNumber: number): Observable<IStudent>
  {
    return this.http.get<IStudent>(`${this.apiServiceUrl}student/read/firstName=${studentNumber}`, httpOptions);
  }

  getStudents(): any
  {
    return this.http.get<IStudent[]>(`${this.apiServiceUrl}student/find-all`, httpOptions);
  }

  removeStudent(studentId: number): any
  {
    return this.http.delete<void>(`${this.apiServiceUrl}student/delete/${studentId}`, httpOptions)

  }
}

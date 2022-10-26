// Author: Jody Kearns (209023651)
// Date: 10 October 2022
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ICourse} from "../models/ICourse.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('course-admin:721087c4-0ede-407e-8c1f-ac57e531f297')
  })
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addCourse(course: ICourse): Observable<ICourse> {
    return this.http.post<any>(`${this.apiServiceUrl}course/save`, course, httpOptions);
  }

  public getCourse(courseId: string): Observable<ICourse>
  {
    return this.http.get<ICourse>(`${this.apiServiceUrl}course/read/${courseId}`, httpOptions);
  }

  public getCourses(): Observable<ICourse[]>
  {
    return this.http.get<ICourse[]>(`${this.apiServiceUrl}course/find-all`, httpOptions);
  }

  public deleteCourse(courseId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServiceUrl}course/delete/${courseId}`, httpOptions)
  }
}

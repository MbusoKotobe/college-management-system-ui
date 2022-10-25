import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lecturer} from "../models/lecturer.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getLecturers(): Observable<Lecturer[]> {
    return this.http.get<Lecturer[]>(`${this.apiServerUrl}lecturer/read-all`)
  }

  public addLecturer(lecturer: Lecturer): Observable<Lecturer> {
    return this.http.post<Lecturer>(`${this.apiServerUrl}lecturer/save`,lecturer)
  }

  public readLecturer(lecturerId: string): Observable<Lecturer> {
    return this.http.get<Lecturer>(`${this.apiServerUrl}lecturer/read/${lecturerId}`)
  }

  public deleteLecturer(lecturerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}lecturer/delete/${lecturerId}`)
  }
}

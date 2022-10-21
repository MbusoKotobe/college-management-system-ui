import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IFaculty } from "../models/IFaculty.model";

@Injectable({providedIn: 'root'})
export class FacultyService 
{
    private apiServiceUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient)
    {   }

    addFaculty(faculty: IFaculty): Observable<IFaculty>
    {
        return this.http.post<any>(`${this.apiServiceUrl}faculty/save`, faculty);
    }

    getFaculty(facultyId: number): Observable<IFaculty>
    {
        return this.http.get<IFaculty>(`${this.apiServiceUrl}faculty/read/facultyId=${facultyId}`);
    }

    getFaculties(): any
    {
        return this.http.get<IFaculty[]>(`${this.apiServiceUrl}faculty/find-all`);
    }

    removeFaculty(shift: IFaculty): any
    {
        return this.http.post<any>(`${this.apiServiceUrl}faculty/delete`, shift);
    }
}
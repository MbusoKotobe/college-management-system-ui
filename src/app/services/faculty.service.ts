import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IFaculty } from "../models/IFaculty.model";
import { HttpHeaders } from "@angular/common/http";


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('faculty-admin:721087c4-0ede-407e-8c1f-ac57e531f293')
    })
};

@Injectable({ providedIn: 'root' })
export class FacultyService 
{
    private apiServiceUrl = environment.apiBaseUrl;

    constructor (private http: HttpClient)
    { }

    addFaculty(faculty: IFaculty): Observable<IFaculty>
    {
        return this.http.post<any>(`${this.apiServiceUrl}faculty/save`, faculty, httpOptions);
    }

    getFaculty(facultyId: number): Observable<IFaculty>
    {
        return this.http.get<IFaculty>(`${this.apiServiceUrl}faculty/read/facultyId=${facultyId}`, httpOptions);
    }

    getFaculties(): any
    {
        return this.http.get<IFaculty[]>(`${this.apiServiceUrl}faculty/find-all`, httpOptions);
    }

    removeFaculty(shift: IFaculty): any
    {
        return this.http.delete<any>(`${this.apiServiceUrl}faculty/delete`, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('faculty-admin:721087c4-0ede-407e-8c1f-ac57e531f293')
            }),
            body: shift,
        });
    }
}
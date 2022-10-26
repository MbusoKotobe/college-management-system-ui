import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IDepartment } from "../models/IDepartment.model";
import { HttpHeaders } from "@angular/common/http";


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('department-admin:721087c4-0ede-407e-8c1f-ac57e531f301')
    })
};

@Injectable({providedIn: 'root'})
export class DepartmentService
{
    private apiServiceUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient)
    {   }

    addDepartment(department: IDepartment): Observable<IDepartment>
    {
        return this.http.post<any>(`${this.apiServiceUrl}department/save`, department, httpOptions);
    }

    getDepartment(departmentId: number): Observable<IDepartment>
    {
        return this.http.get<IDepartment>(`${this.apiServiceUrl}department/read/departmentId=${departmentId}`,httpOptions);
    }

    getDepartments(): any
    {
        return this.http.get<IDepartment[]>(`${this.apiServiceUrl}department/find-all`,httpOptions);
    }

    removeDepartment(departmentId: number): any
    {
        return this.http.delete<any>(`${this.apiServiceUrl}department/delete/${departmentId}`, httpOptions);
    }
}

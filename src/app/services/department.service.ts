import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IDepartment } from "../models/IDepartment.model";

@Injectable({providedIn: 'root'})
export class DepartmentService 
{
    private apiServiceUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient)
    {   }

    addDepartment(department: IDepartment): Observable<IDepartment>
    {
        return this.http.post<any>(`${this.apiServiceUrl}department/save`, department);
    }

    getDepartment(departmentId: number): Observable<IDepartment>
    {
        return this.http.get<IDepartment>(`${this.apiServiceUrl}department/read/departmentId=${departmentId}`);
    }

    getDepartments(): any
    {
        return this.http.get<IDepartment[]>(`${this.apiServiceUrl}department/find-all`);
    }

    removeDepartment(department: IDepartment): any
    {
        return this.http.post<any>(`${this.apiServiceUrl}department/delete`, department);
    }
}
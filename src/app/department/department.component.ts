import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../models/IDepartment.model';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  department: IDepartment =
  {
    departmentId: 0,
    departmentName: "",
    departmentDescription: "",
  }

  departments: Array<IDepartment> = [];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  public createDepartment (department: IDepartment): void
  {
    this.departmentService.addDepartment(department).subscribe({
      error: (error) => console.log(error),
      complete: () => console.info("Request Successful"),
    });  
  }

  public getDepartment (departmentId: number): void
  {
    this.departmentService.getDepartment(departmentId).subscribe({
      next: (response) => this.department = response,
      error: (error) => console.log(error),
      complete: () => console.info("Request Successful"),
    });  
  }

  public getDepartments (): void
  {
    this.departmentService.getDepartments().subscribe({
      next: (response: IDepartment[]) => this.departments = response,
      error: (error: any) => console.log(error),
      complete: () => console.info("Request Successful"),
    }); 
    
    setTimeout(() => {
      
    }, 3000);
  }

  public onDeleteDepartment(department: IDepartment): void
  {
    this.departmentService.removeDepartment(department).subscribe({
      error: (error: any) => console.log(error),
      complete: () => console.info("Request Successful"),
    });  
  }

  public updateDepartment(department: IDepartment): void
  {
    this.departmentService.removeDepartment(department).subscribe({
      error: (error: any) => console.log(error),
      complete: () => console.info("Request Successful"),
    });  
  }


}

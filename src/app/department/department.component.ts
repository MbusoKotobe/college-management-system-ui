import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../models/IDepartment.model';
import { IFaculty } from '../models/IFaculty.model';
import { DepartmentService } from '../services/department.service';
import { ToastrUtility } from '../Utility/toastr-utility.utility';
import { FormControl, FormGroup } from '@angular/forms';
import { FacultyService } from '../services/faculty.service';



@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {


  departmentForm = new FormGroup(
  {
    departmentId: new FormControl(0),
    departmentName: new FormControl(""),
    departmentDescription: new FormControl(""),
    faculty: new FormControl(new Object())
  });

  editDepartmentForm = new FormGroup(

  {
    departmentId: new FormControl(0),
    departmentName: new FormControl(""),
    departmentDescription: new FormControl("!"),
    faculty: new FormControl(new Object())
  }
  );

  department: IDepartment =
  {
    departmentId: 0,
    departmentName: "",
    departmentDescription: "",
    faculty: new Object()

  }

  faculties = new Array <IFaculty>();

  departments: Array<IDepartment> = new Array<IDepartment>();

  constructor(private departmentService: DepartmentService, private toastr: ToastrUtility
  ,private facultyService: FacultyService)
  { }

  ngOnInit(): void
  {
    this.getDepartments();
    this.fetchFaculties();
  }

  fetchFaculties(): void
  {
    this.faculties = this.facultyService.getFaculties();
  }

  saveDepartment(department: IDepartment): void
  {
    this.departmentService.addDepartment(department).subscribe(
    {
      error: (error) => this.toastr.showtoastrError(error, "Request Status"),
      complete: () => this.toastr.showtoastrSuccess("Save Request Successful.", "Request Status")
    });

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  getDepartment(departmentId: number): void
  {
    this.departmentService.getDepartment(departmentId).subscribe(
    {
      next: (respoonse: IDepartment) => this.department = respoonse,
      error: (error: any) => console.error(error),
      complete: () => console.info("Fetch Request Successful.")
    });

    setTimeout(() => {

    }, 1500);
  }

  getDepartments(): void
  {
    this.departmentService.getDepartments().subscribe(
    {
      next: (response: IDepartment[]) => this.departments = response,
      error: (error: any) => console.error(error),
      complete: () => console.info("Fetch departments Request Successful.")
    });

    setTimeout(() => {

    }, 1500);
  }

  removeDepartment(department: IDepartment): void
  {
    this.departmentService.removeDepartment(department).subscribe(
    {
      error: (error: any) => this.toastr.showtoastrError(error, "Request Status"),
    });

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  showCreateDepartmentModal(): void
  {
    document.getElementById("createDepartmentModalId")!.style.display = "block";
  }

  closeCreateDepartmentModal(): void
  {
    document.getElementById("createDepartmentModalId")!.style.display = "none";
  }

  showEditDepartmentModal(department: IDepartment): void
  {
    document.getElementById("editDepartmentModalId")!.style.display = "block";
    this.setDepartment(department);
    this.setUpEditDepartmentModal(department);
  }

  closeEditDepartmentModal(): void
  {
    document.getElementById("editDepartmentModalId")!.style.display = "none";
  }

  submitDepartment(): void
  {

    this.department.departmentName = this.departmentForm.value.departmentName!;
    this.department.departmentDescription = this.departmentForm.value.departmentDescription!;
    this.department.faculty = this.department.value.faculty;
    this.saveDepartment(this.department);
  }

  submitEditDepartmentForm(): void
  {
    this.department.departmentName = this.editDepartmentForm.value.departmentName!;
    this.department.departmentDescription = this.editDepartmentForm.value.departmentDescription!;
    this.department.faculty = this.editDepartmentForm.value.faculty;
    this.saveDepartment(this.department);

  }

  deleteDepartment($event: any, department: IDepartment): void
  {
    event?.stopPropagation();
    this.removeDepartment(department);
  }

  private setUpEditDepartmentModal(department: IDepartment): void
  {
    this.editDepartmentForm.patchValue({
      departmentId: department.departmentId,
      departmentName: department.departmentName,
      departmentDescription: department.departmentDescription,
    });
  }

  private setDepartment(department: IDepartment): void
  {
    this.department.departmentId = department.departmentId;
    this.department.departmentName = department.departmentName;
    this.department.departmentDescription= department.departmentDescription;
  }
}

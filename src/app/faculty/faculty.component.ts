import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFaculty } from '../models/IFaculty.model';
import { FacultyService } from '../services/faculty.service';
import { ToastrUtility } from '../Utility/toastr-utility.utility';
//import { IFaculty } from '../models/Faculty.model';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  facultyForm = new FormGroup(
  {
    facultyId: new FormControl(0),
    facultyName: new FormControl(""),
    facultyDescription: new FormControl("")
  });

  editFacultyForm = new FormGroup(
  {
    facultyId: new FormControl(0),
    facultyName: new FormControl(""),
    facultyDescription: new FormControl("!")
  }
  );

  faculty: IFaculty = 
  {
    facultyId: 0,
    facultyName: "",
    facultyDescription: ""
  }

  faculties: Array<IFaculty> = new Array<IFaculty>();

  constructor(private facultyService: FacultyService, private toastr: ToastrUtility) 
  { }

  ngOnInit(): void 
  {
    this.getFaculties();
  }

  saveFaculty(faculty: IFaculty): void
  {
    this.facultyService.addFaculty(faculty).subscribe(
    {
      error: (error) => this.toastr.showtoastrError(error, "Request Status"),
      complete: () => this.toastr.showtoastrSuccess("Save Request Successful.", "Request Status")
    });

    setTimeout(() => {
      window.location.reload();   
    }, 1500);
  }

  getFaculty(facultyId: number): void
  {
    this.facultyService.getFaculty(facultyId).subscribe(
    {
      next: (respoonse: IFaculty) => this.faculty = respoonse,
      error: (error: any) => console.error(error),
      complete: () => console.info("Fetch Request Successful.")
    });

    setTimeout(() => { 
      
    }, 1500);
  }

  getFaculties(): void
  {
    this.facultyService.getFaculties().subscribe(
    {
      next: (response: IFaculty[]) => this.faculties = response,
      error: (error: any) => console.error(error),
      complete: () => console.info("Fetch Faculties Request Successful.")
    });

    setTimeout(() => { 
      
    }, 1500);
  }

  removeFaculty(faculty: IFaculty): void
  {
    this.facultyService.removeFaculty(faculty).subscribe(
    {
      error: (error: any) => this.toastr.showtoastrError(error, "Request Status"),
    });

    setTimeout(() => {
      window.location.reload();   
    }, 1500);
  }

  showCreateFacultyModal(): void
  {
    document.getElementById("createFacultyModalId")!.style.display = "block";
  }

  closeCreateFacultyModal(): void
  {
    document.getElementById("createFacultyModalId")!.style.display = "none";
  }

  showEditFacultyModal(faculty: IFaculty): void
  {
    document.getElementById("editFacultyModalId")!.style.display = "block";
    this.setFaculty(faculty);
    this.setUpEditFacultyModal(faculty);
  }

  closeEditFacultyModal(): void
  {
    document.getElementById("editFacultyModalId")!.style.display = "none";
  }

  submitFaculty(): void
  {
    //this.faculty.facultyId = 0;
    this.faculty.facultyName = this.facultyForm.value.facultyName!;
    this.faculty.facultyDescription = this.facultyForm.value.facultyDescription!;
    this.saveFaculty(this.faculty);  
  }

  submitEditFacultyForm(): void
  {
    this.faculty.facultyName = this.editFacultyForm.value.facultyName!;
    this.faculty.facultyDescription = this.editFacultyForm.value.facultyDescription!;
    this.saveFaculty(this.faculty);
  }

  deleteFaculty($event: any, faculty: IFaculty): void
  {
    event?.stopPropagation();
    this.removeFaculty(faculty);
  }

  private setUpEditFacultyModal(faculty: IFaculty): void
  {
    this.editFacultyForm.patchValue({
      facultyId: faculty.facultyId,
      facultyName: faculty.facultyName,
      facultyDescription: faculty.facultyDescription,
    });
  }

  private setFaculty(faculty: IFaculty): void
  {
    this.faculty.facultyId = faculty.facultyId;
    this.faculty.facultyName = faculty.facultyName;
    this.faculty.facultyDescription = faculty.facultyDescription;
  }
}
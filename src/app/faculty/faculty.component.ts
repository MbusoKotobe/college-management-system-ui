import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFaculty } from '../models/IFaculty.model';
import { FacultyService } from '../services/faculty.service';
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
    facultyName: new FormControl(),
    facultyDescription: new FormControl()
  });

  editFacultyForm = new FormGroup(
  {
    facultyId: new FormControl(0),
    facultyName: new FormControl(),
    facultyDescription: new FormControl()
  }
  );

  faculty: IFaculty = 
  {
    facultyId: 0,
    facultyName: "",
    facultyDescription: ""
  }

  faculties: Array<IFaculty> = new Array<IFaculty>();

  constructor(private facultyService: FacultyService) 
  { }

  ngOnInit(): void 
  {
    this.getFaculties();
  }

  fetchFaculties(): void
  {
    throw new Error('Method not implemented.');
  }

  saveFaculty(faculty: IFaculty): void
  {
    this.facultyService.addFaculty(faculty).subscribe(
    {
      //TODO: Remove console logs.
      error: (error) => console.error(error),
      complete: () => console.info("Save Request Successful.")
    });
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
      
    }, 3000);
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
      
    }, 3000);
  }

  removeFaculty(faculty: IFaculty): void
  {
    this.facultyService.removeFaculty(faculty).subscribe(
    {
      error: (error: any) => console.error(error),
      complete: () => console.info("Remove Faculty Request Successful.")
    });
  }

  showCreateFacultyModal()
  {
    document.getElementById("createFacultyModalId")!.style.display = "block";
  }

  showEditFacultyModal(faculty: IFaculty)
  {
    document.getElementById("editFacultyModalId")!.style.display = "block";
    this.setUpEditFacultyModal(faculty);
  }

  submitFaculty()
  {
    this.faculty.facultyId = 0;
    this.faculty.facultyName = this.facultyForm.value.facultyName;
    this.faculty.facultyDescription = this.facultyForm.value.facultyDescription;
  }

  private setUpEditFacultyModal(faculty: IFaculty)
  {
    this.facultyForm.patchValue({
      facultyId: faculty.facultyId,
      facultyName: faculty.facultyName,
      facultyDescription: faculty.facultyDescription,
    });
  }
}

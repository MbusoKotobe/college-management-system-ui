import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ILecturer} from "../models/ILecturer.model";
import {LecturerService} from "../services/lecturer.service";
import { ToastrUtility } from '../Utility/toastr-utility.utility';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {

  lecturerForm = new FormGroup(
    {
      lecturerId: new FormControl(0),
      firstName: new FormControl(""),
      middleName: new FormControl(""),
      lastName: new FormControl("")
    });

  editLecturerForm = new FormGroup(
    {
      lecturerId: new FormControl(0),
      firstName: new FormControl(""),
      middleName: new FormControl(""),
      lastName: new FormControl("")
    }
  );

  lecturer: ILecturer =
    {
      lecturerId: 0,
      firstName: "",
      middleName: "",
      lastName: ""
    }

  lecturers: Array<ILecturer> = new Array<ILecturer>();

  constructor(private lecturerService: LecturerService, private toastr: ToastrUtility)
  { }

  ngOnInit(): void {
    this.getLecturers();
  }

  fetchLecturers(): void {
    throw new Error('Method not implemented.');
  }
  saveLecturer(lecturer: ILecturer): void
  {
    this.lecturerService.addLecturer(lecturer).subscribe(
      {
        error: (error) => this.toastr.showtoastrError(error, "Request Status"),
        complete: () => this.toastr.showtoastrSuccess("Save Request Successful.", "Request Status")
      });

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  getLecturer(lecturerId: number): void
  {
    this.lecturerService.getLecturer(lecturerId).subscribe(
            {
        next: (respoonse: ILecturer) => this.lecturer = respoonse,
        error: (error: any) => console.error(error),
        complete: () => console.info("Fetch Request Successful.")
      });

    setTimeout(() => {

    }, 1500);
  }

  getLecturers(): void
  {
    this.lecturerService.getLecturers().subscribe(
      {
        next: (response: ILecturer[]) => this.lecturers = response,
        error: (error: any) => console.error(error),
        complete: () => console.info("Fetch Lecturers Request Successful.")
      });

    setTimeout(() => {

    }, 1500);
  }

  removeLecturer(lecturer: ILecturer): void
  {
    this.lecturerService.removeLecturer(lecturer).subscribe(
      {
        error: (error: any) => this.toastr.showtoastrError(error, "Request Status"),
      });

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  showCreateLecturerModal(): void
  {
    document.getElementById("createLecturerModalId")!.style.display = "block";
  }

  closeCreateLecturerModal(): void
  {
    document.getElementById("createLecturerModalId")!.style.display = "none";
  }

  showEditLecturerModal(lecturer: ILecturer): void
  {
    document.getElementById("editLecturerModalId")!.style.display = "block";
    this.setLecturer(lecturer);
    this.setUpEditLecturerModal(lecturer);
  }

  closeEditLecturerModal(): void
  {
    document.getElementById("editLecturerModalId")!.style.display = "none";
  }

  submitLecturer(): void
  {
    this.lecturer.lecturerId = 0;
    this.lecturer.firstName = this.lecturerForm.value.firstName!;
    this.lecturer.middleName = this.lecturerForm.value.middleName!;
    this.lecturer.lastName = this.lecturerForm.value.lastName!;
    this.saveLecturer(this.lecturer);
  }

  submitEditLecturerForm(): void
  {
    this.lecturer.firstName = this.editLecturerForm.value.firstName!;
    this.lecturer.middleName = this.editLecturerForm.value.middleName!;
    this.lecturer.lastName = this.editLecturerForm.value.lastName!;
    this.saveLecturer(this.lecturer);
  }

  deleteLecturer($event: any, lecturer: ILecturer): void
  {
    event?.stopPropagation();
    this.removeLecturer(lecturer);
  }

  private setUpEditLecturerModal(lecturer: ILecturer): void
  {
    this.editLecturerForm.patchValue({
      lecturerId: lecturer.lecturerId,
      firstName: lecturer.firstName,
      middleName: lecturer.middleName,
      lastName: lecturer.lastName
    });
  }

  private setLecturer(lecturer: ILecturer): void
  {
    this.lecturer.lecturerId = lecturer.lecturerId;
    this.lecturer.firstName = lecturer.firstName;
    this.lecturer.firstName = lecturer.firstName;
    this.lecturer.firstName = lecturer.firstName;
  }
}

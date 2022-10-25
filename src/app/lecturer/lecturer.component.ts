import { Component, OnInit } from '@angular/core';
import {Lecturer} from "../models/lecturer.model";
import {HttpErrorResponse} from "@angular/common/http";
import {LecturerService} from "../services/lecturer.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {

  public lecturer: Lecturer[];
  public deleteLecturer: Lecturer;
  public editLecturer: Lecturer;

  constructor(private lecturerService: LecturerService) { }

  ngOnInit(): void {
    this.getLecturers();
  }

  public getLecturers(): void {
    this.lecturerService.getLecturers().subscribe(
      (response: Lecturer[]) => {
        this.lecturer = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public onAddLecturer(addLecturerForm: NgForm): void {
    document.getElementById('lecturer-close-button').click();
    this.lecturerService.addLecturer(addLecturerForm.value).subscribe(
      (response: Lecturer) => {
        this.getLecturers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
    addLecturerForm.reset();
  }


  public onOpenModalLecturer(lecturer: Lecturer, mode: number): void {
    const container = document.getElementById('main-container-lecturer')
    const buttonLecturer = document.createElement('button');
    buttonLecturer.type = 'button';
    buttonLecturer.style.display = 'none';
    buttonLecturer.setAttribute("data-bs-toggle", 'modal');
    if (mode === 'add') {
      buttonLecturer.setAttribute("data-bs-target", '#addLecturerModal');
    }
    if (mode === 'edit') {
      this.editLecturer = lecturer;
      buttonLecturer.setAttribute("data-bs-target", '#editLecturerModal');
    }
    if (mode === 'delete') {
      this.deleteLecturer = lecturer;
      buttonLecturer.setAttribute("data-bs-target", '#deletePatientModal');
    }

    container.appendChild(buttonLecturer);
    buttonLecturer.click();
  }


  public onDeleteLecturer(lecturerId: number): void {
    document.getElementById('delete-lecturer-modal-close').click();
    this.lecturerService.deleteLecturer(lecturerId).subscribe(
      (response: void) => {
        this.getLecturers();
      },
      (error: HttpErrorResponse) => {
      }
    );
  }

  public onUpdateLecturer(editLecturerForm: NgForm): void {
    document.getElementById('updated-lecturer-close-button').click();
    this.lecturerService.addLecturer(editLecturerForm.value).subscribe(
      (response: Lecturer) => {
        this.getLecturers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }
}

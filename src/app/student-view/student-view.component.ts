import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validator, Validators} from '@angular/forms';
import { IStudent } from '../models/IStudent.model';
import { StudentServices } from '../services/student.services';
import { ToastrUtility } from '../Utility/toastr-utility.utility';



@Component({
  selector: 'app-student',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  studentForm = new FormGroup(
    {
      firstName: new FormControl( ),
      middleName: new FormControl(),
      lastName: new FormControl(),
      studentNumber: new FormControl()
    });

  editStudentForm = new FormGroup(
    {
      firstName: new FormControl(""),
      middleName: new FormControl(""),
      lastName: new FormControl(""),
      studentNumber: new FormControl()
    }
  );

  student: IStudent =
    {
      firstName: "",
      middleName: "",
      lastName: "",
      studentNumber: 0
    }

  students: Array<IStudent> = new Array<IStudent>();


  constructor(private studentService: StudentServices, private toastr: ToastrUtility)
  { }

  ngOnInit(): void
  {
    this.getStudents();
  }

  fetchStudents(): void
  {
    throw new Error('Method not implemented.');
  }

  saveStudent(student: IStudent): void
  {
    this.studentService.addStudent(student).subscribe(
      {
        error: (error) => this.toastr.showtoastrError(error, "Request Status"),
        complete: () => this.toastr.showtoastrSuccess("Save Request Successful.", "Request Status")
      });

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  getStudent(studentNumber: number): void
  {
    this.studentService.getStudent(studentNumber).subscribe(
      {
        next: (response: IStudent) => this.student = response,
        error: (error: any) => console.error(error),
        complete: () => console.info("Fetch Request Successful.")
      });

    setTimeout(() => {

    }, 1500);
  }

  getStudents(): void
  {
    this.studentService.getStudents().subscribe(
      {
        next: (response: IStudent[]) => this.students = response,
        error: (error: any) => console.error(error),
        complete: () => console.info("Fetch Students Request Successful.")
      });

    setTimeout(() => {

    }, 1500);
  }

  removeStudent(student: IStudent): void
  {
    this.studentService.removeStudent(student.studentNumber!).subscribe(
      {
        error: (error: any) => this.toastr.showtoastrError(error, "Request Status"),
      });

    setTimeout(() => {
       window.location.reload();
    }, 1500);
  }

  showCreateStudentModal(): void
  {
    document.getElementById("createStudentModalId")!.style.display = "block";
  }

  closeCreateStudentModal(): void
  {
    document.getElementById("createStudentModalId")!.style.display = "none";
  }

  showEditStudentModal(student: IStudent): void
  {
    document.getElementById("editStudentModalId")!.style.display = "block";
    this.setStudent(student);
    this.setUpEditStudentModal(student);
  }

  closeEditStudentModal(): void
  {
    document.getElementById("editStudentModalId")!.style.display = "none";
  }

  submitStudent(): void
  {
    this.student.firstName = this.studentForm.value.firstName!;
    this.student.middleName = this.studentForm.value.middleName!;
    this.student.lastName = this.studentForm.value.lastName!;
    this.student.studentNumber = this.studentForm.value.studentNumber!;
    this.saveStudent(this.student);
  }

  submitEditStudentForm(): void
  {
    this.student.firstName = this.editStudentForm.value.firstName!;
    this.student.middleName = this.editStudentForm.value.middleName!;
    this.student.lastName = this.editStudentForm.value.lastName!;
    //this.student.studentNumber = this.studentForm.value.studentNumber!;
    this.saveStudent(this.student);
  }

  deleteStudent($event: any, student: IStudent): void
  {
    event?.stopPropagation();
    this.removeStudent(student);
  }

  private setUpEditStudentModal(student: IStudent): void
  {
    this.editStudentForm.patchValue({
      firstName: student.firstName,
      middleName: student.middleName,
      lastName: student.lastName,
      studentNumber: student.studentNumber,
    });
  }

  private setStudent(student: IStudent): void
  {
    this.student.firstName = student.firstName;
    this.student.middleName = student.middleName;
    this.student.lastName = student.lastName;
    this.student.studentNumber = student.studentNumber;
  }
}

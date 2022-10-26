// Author: Jody Kearns (209023651)
// Date: 10 October 2022
import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {ICourse} from "../models/ICourse.model";
import {ToastrUtility} from "../Utility/toastr-utility.utility";
import {CourseService} from "../services/course.service";
import {IModule} from "../models/IModule.model";
import {ModuleService} from "../services/module.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseForm = new FormGroup(
    {
      courseId: new FormControl(),
      courseName: new FormControl(),
      courseDescription: new FormControl(),
      modules: new FormControl()
    });

  editCourseForm = new FormGroup(
    {
      editCourseId: new FormControl(),
      editCourseName: new FormControl(),
      editCourseDescription: new FormControl(),
      editModules: new FormControl()
    }
  );


  module: IModule = {
    moduleId: "",
    moduleName: "",
    moduleDescription: ""
  }

  course: ICourse = {
      courseId: "",
      courseName: "",
      courseDescription: "",
      modules: []
  }


  courses: Array<ICourse> = new Array<ICourse>();
  modules: Array<IModule> = new Array<IModule>();


  constructor(private courseService: CourseService, private moduleService: ModuleService, private toastr: ToastrUtility) { }

  ngOnInit(): void {
    this.getCourses();
    this.getModules();
  }

  saveCourse(course: ICourse): void {
    this.courseService.addCourse(course).subscribe(
      {
        error: (error) => this.toastr.showtoastrError("Error adding course, ensure that all information is correct", "Course not added"),
        complete: () => this.toastr.showtoastrSuccess("Save Request Successful.", "Request Status")
      });

      setTimeout(() => {
        window.location.reload();
      }, 2500);
  }

  getCourse(courseId: string): void {
    this.courseService.getCourse(courseId).subscribe(
      {
        next: (response: ICourse) => this.course = response,
        error: (error: any) => console.error(error),
        complete: () => console.info("Fetch Request Successful.")
      });

    setTimeout(() => {

    }, 1500);
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe(
      {
        next: (response: ICourse[]) => this.courses = response,
        error: (error: any) => console.error(error),
        complete: () => console.info("Fetch Courses Request Successful.")
      });

    setTimeout(() => {
    }, 1500);
  }

  removeCourse(course: ICourse): void {
    this.courseService.deleteCourse(course.courseId).subscribe(
      {
        error: (error: any) => this.toastr.showtoastrError("Unable to delete course", "Request Status"),
      });

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  showCreateCourseModal(): void {
    document.getElementById("createCourseModalId")!.style.display = "block";
  }

  closeCreateCourseModal(): void {
    document.getElementById("createCourseModalId")!.style.display = "none";
  }

  showEditCourseModal(course: ICourse): void {
    document.getElementById("editCourseModalId")!.style.display = "block";
    this.setCourse(course);
    this.setUpEditCourseModal(course);
  }

  closeEditCourseModal(): void {
    document.getElementById("editCourseModalId")!.style.display = "none";
  }

  showViewCourseDetails(course: ICourse): void {
    document.getElementById("viewCourseDetails")!.style.display = "block";
    this.setCourse(course);
  }

  closeViewCourseDetails(): void {
    document.getElementById("viewCourseDetails")!.style.display = "none";
  }

  showDeleteCourse(course: ICourse): void {
    document.getElementById("deleteCourseModal")!.style.display = "block";
    this.setCourse(course);
  }

  closeDeleteCourseDetails(): void {
    document.getElementById("deleteCourseModal")!.style.display = "none";
  }

  submitCourse(): void {

    this.course.courseId = this.courseForm.value.courseId!;
    this.course.courseName = this.courseForm.value.courseName!;
    this.course.courseDescription = this.courseForm.value.courseDescription!;
    this.course.modules = this.courseForm.value.modules;
    this.saveCourse(this.course);
  }

  submitEditCourseForm(): void {
    this.course.courseId = this.editCourseForm.value.editCourseId!;
    this.course.courseName = this.editCourseForm.value.editCourseName!;
    this.course.courseDescription = this.editCourseForm.value.editCourseDescription!;
    this.course.modules = this.editCourseForm.value.editModules!;
    this.saveCourse(this.course);
  }

  private setUpEditCourseModal(course: ICourse): void {
    this.editCourseForm.patchValue({
      editCourseId: course.courseId,
      editCourseName: course.courseName,
      editCourseDescription: course.courseDescription,
      editModules: course.modules,
    });
  }

  private setCourse(course: ICourse): void {
    this.course.courseId = course.courseId;
    this.course.courseName = course.courseName;
    this.course.courseDescription = course.courseDescription;
    this.course.modules = course.modules;
  }

  deleteCourse($event: any, course: ICourse): void
  {
    event?.stopPropagation();
    this.removeCourse(course);
  }

  getModules(): void {
    this.moduleService.getModules().subscribe(
      {
        next: (response: IModule[]) => this.modules = response,
        error: (error: any) => console.error(error),
        complete: () => console.info("Fetch Modules Request Successful.")
      });

    setTimeout(() => {

    }, 1500);
  }

  itemSelected(e:any){
    console.log(e);
  }

}

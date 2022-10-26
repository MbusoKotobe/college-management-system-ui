import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { FacultyComponent } from './faculty/faculty.component';
<<<<<<< HEAD
import { LecturerComponent } from './lecturer/lecturer.component';
=======
import {StudentViewComponent} from "./student-view/student-view.component";
>>>>>>> b1dd850dba7f67854722a615b8b9a34518c6bdf0
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {CourseComponent} from "./course/course.component";
import {ModulexComponent} from "./modulex/modulex.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'faculty', component: FacultyComponent },
<<<<<<< HEAD
  { path: 'lecturer', component: LecturerComponent },
  { path: 'course', component: CourseComponent },
  { path: 'module', component: ModulexComponent}

=======
  { path: 'student-view', component: StudentViewComponent},
  { path: 'department', component: DepartmentComponent },
  { path: 'course', component: CourseComponent },
  { path: 'module', component: ModulexComponent},
>>>>>>> b1dd850dba7f67854722a615b8b9a34518c6bdf0
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD

export const routingComponents = [ LoginComponent, SignupComponent, FacultyComponent, CourseComponent, ModulexComponent, LecturerComponent ]
=======
export const routingComponents = [ LoginComponent, SignupComponent, FacultyComponent, CourseComponent, ModulexComponent, DepartmentComponent, StudentViewComponent ]
>>>>>>> b1dd850dba7f67854722a615b8b9a34518c6bdf0


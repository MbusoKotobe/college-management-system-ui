import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { FacultyComponent } from './faculty/faculty.component';
import {StudentViewComponent} from "./student-view/student-view.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {CourseComponent} from "./course/course.component";
import {ModulexComponent} from "./modulex/modulex.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'student-view', component: StudentViewComponent},
  { path: 'department', component: DepartmentComponent },
  { path: 'course', component: CourseComponent },
  { path: 'module', component: ModulexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LoginComponent, SignupComponent, FacultyComponent, CourseComponent, ModulexComponent, DepartmentComponent, StudentViewComponent ]


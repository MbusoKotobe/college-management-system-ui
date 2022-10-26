import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import {StudentViewComponent} from "./student-view/student-view.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {CourseComponent} from "./course/course.component";
import {ModulexComponent} from "./modulex/modulex.component";

const routes: Routes = [
  { path: '', redirectTo: 'faculty', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'faculty', component: FacultyComponent },
<<<<<<< HEAD
  { path: 'student-view', component: StudentViewComponent}
=======
  { path: 'course', component: CourseComponent },
  { path: 'module', component: ModulexComponent}
>>>>>>> 7bea653cbb654ecbd9eca4939a8d04d2d3eb2dcf
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LoginComponent, SignupComponent, FacultyComponent, CourseComponent, ModulexComponent ]

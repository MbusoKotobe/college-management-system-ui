import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroup } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyComponent } from './faculty/faculty.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DepartmentComponent } from './department/department.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StudentViewComponent } from './student-view/student-view.component';
import { CourseComponent } from './course/course.component';
import { ModulexComponent } from './modulex/modulex.component';
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  declarations: [
    AppComponent,
    FacultyComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    StudentViewComponent,
    DepartmentComponent,
    CourseComponent,
    ModulexComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        NgSelectModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

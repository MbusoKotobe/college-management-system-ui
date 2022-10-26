import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyComponent } from './faculty/faculty.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
<<<<<<< HEAD
import { StudentViewComponent } from './student-view/student-view.component';
=======
import { CourseComponent } from './course/course.component';
import { ModulexComponent } from './modulex/modulex.component';
>>>>>>> 7bea653cbb654ecbd9eca4939a8d04d2d3eb2dcf

@NgModule({
  declarations: [
    AppComponent,
    FacultyComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
<<<<<<< HEAD
    StudentViewComponent
=======
    CourseComponent,
    ModulexComponent
>>>>>>> 7bea653cbb654ecbd9eca4939a8d04d2d3eb2dcf
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

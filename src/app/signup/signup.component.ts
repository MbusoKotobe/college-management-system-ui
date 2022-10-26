import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from '../models/IUser.model';
import { UserService } from '../services/user.service';
import { ToastrUtility } from '../Utility/toastr-utility.utility';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    username: new FormControl(""),
    userType: new FormControl("Admin"),
    password: new FormControl(""),
    passwordConfirm: new FormControl(""),
  });

  user: IUser = {
    userId: "",
    username: "",
    password: "",
    userType: "",
    usernameErrorMessage: "",
    passwordErrorMessage: "",
  }

  constructor(private userService: UserService, private toastr: ToastrUtility) { }

  ngOnInit(): void {
  }

  login(user: IUser): void
  {
    this.userService.login(user).subscribe(
    {
      error: (error) => this.toastr.showtoastrError(error, "Request Status"),
      complete: () => this.toastr.showtoastrSuccess("Signup Successful.", "Request Status")
    });

    setTimeout(() => {
      //window.location.reload();   
    }, 1500);
  }

  signup(user: IUser): void
  {
    this.userService.signup(user).subscribe(
    {
      error: (error) => { 
        this.toastr.showtoastrError(error, "Request Status");
        console.log(error);
        setTimeout(() => {
          //window.location.reload();   
        }, 1500);
    },
      complete: () => this.toastr.showtoastrSuccess("Save Request Successful.", "Request Status")
    });
 
  }

  submitSignup(): void
  {
    if(this.signupForm.value.password !== this.signupForm.value.passwordConfirm)
    {
      this.toastr.showtoastrError("Password do not match!", "Password Error");
      return;
    }

    this.user.username = this.signupForm.value.username!;
    this.user.userType = this.signupForm.value.userType!;
    this.user.password = this.signupForm.value.password!;
    this.signup(this.user);  
    setTimeout(() => {
      //window.location.href = "login";   
    }, 1800);
  }

}

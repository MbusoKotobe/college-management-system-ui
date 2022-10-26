import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from '../models/IUser.model';
import { UserService } from '../services/user.service';
import { ToastrUtility } from '../Utility/toastr-utility.utility';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
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
      error: (error: any) => { 
        this.toastr.showtoastrError(error, "Request Status");
        setTimeout(() => {
          window.location.reload();   
        }, 1500);
    },
      complete: () => this.toastr.showtoastrSuccess("Save Request Successful.", "Request Status")
    });
 
  }

  submitLogin(): void
  {
    this.user.username = this.loginForm.value.username!;
    this.user.password = this.loginForm.value.password!;
    this.login(this.user);  
    setTimeout(() => {
      window.location.href = "login";   
    }, 1800);
  }

}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!:string
  password!:string

  constructor(private authService:AuthService, private router:Router){}

onSubmit(authForm:NgForm){
  console.log(authForm.value)
  

  this.email = authForm.value.email
  this.password = authForm.value.password
  console.log(this.email,this.password)

  this.authService.login(this.email,this.password).subscribe(responseData=>{
    console.log(responseData)
    const expirationDate = new Date(new Date().getTime() + +responseData.expiresIn * 1000)
    this.authService.userSubject.next(new User('User',responseData.email,responseData.idToken,expirationDate,responseData.registered))
    this.authService.loggedUserEmail = responseData.email
    this.router.navigate(['list'])

  },err=>{
    console.log(err.error)
  })

  authForm.reset()
}
}

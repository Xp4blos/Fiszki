import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import {Injectable} from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
@Injectable({providedIn:'root'})
export class NavComponent implements OnInit {
registered!:boolean
constructor(private authService:AuthService, private router:Router){}
public loggedUser !: User
ngOnInit(): void {
  this.authService.userSubject.subscribe(user=>{
    this.loggedUser = user
    this.registered = user.registerd
    if(user.registerd == false){
      this.router.navigate(['/'])
    }
  })
  
}


}

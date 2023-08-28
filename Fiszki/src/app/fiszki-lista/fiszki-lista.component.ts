import { Component, OnInit } from '@angular/core';
import { FiszkiService } from '../services/fiszki.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiszki-lista',
  templateUrl: './fiszki-lista.component.html',
  styleUrls: ['./fiszki-lista.component.css']
})
export class FiszkiListaComponent implements OnInit {

  constructor(private fiszki:FiszkiService, private authService:AuthService,private router:Router){}

  fiszkiList = this.fiszki.fiszki
  ngOnInit(): void {
    this.authService.userSubject.subscribe(user=>{
      if(user.registerd == false){
        this.router.navigate([''])
      }
    })
  }
  

}

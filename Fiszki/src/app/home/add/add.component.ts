import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouteReuseStrategy, Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { Fiszka } from 'src/app/models/fiszka.model';
import { AuthService } from 'src/app/services/auth.service';
import { FiszkiService } from 'src/app/services/fiszki.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  implements OnInit{

newCards:Card[] = []

newCardWord!:string
newCardDefinition!:string

constructor(private usersService:UsersService, private auth:AuthService, private fiszki:FiszkiService, private router:Router){}

onSubmit(form:NgForm){
  console.log(form.value)
  const newFiszka = new Fiszka(form.value.name,form.value.desc,this.usersService.getUserByEmail(this.auth.loggedUserEmail),this.newCards)
  console.log(newFiszka)
  this.usersService.addFiszkiOwner(this.auth.loggedUserEmail,newFiszka)
  this.fiszki.fiszki.push(newFiszka)
  this.router.navigate(['list'])
}

onAddCard(){
this.newCards.push(new Card(this.newCardWord, this.newCardDefinition))
this.newCardDefinition = ''
this.newCardWord = ''
}
onCancel(){
  this.router.navigate(['home'])
}
ngOnInit(): void {

}
}

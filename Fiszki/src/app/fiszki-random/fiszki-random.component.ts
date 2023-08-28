import { Component, OnInit } from '@angular/core';
import { LerningService } from '../services/lerning.service';
import { Card } from '../models/card.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fiszki-random',
  templateUrl: './fiszki-random.component.html',
  styleUrls: ['./fiszki-random.component.css']
})
export class FiszkiRandomComponent implements OnInit{
word!:Card
id!:number
Cards!:any
constructor(private lerning:LerningService,private route: ActivatedRoute, private router: Router){}


onInput(event:any){
  let value = event.target.value
if(value.toLowerCase() == this.word.definition.toLowerCase()){
  console.log('correct')
  this.word = this.lerning.getRandom(this.Cards)
  console.log(this.word)
  event.target.value = ''
}
else{
  console.log('incorrect')
}
}
onBack(){
this.router.navigate(['list/'+this.id+'/details'])
}
onChangeMode(){
this.lerning.mode = !this.lerning.mode
this.Cards = this.lerning.changeMode(this.id)
this.word = this.lerning.getRandom(this.Cards)
console.log('mode changed ',this.lerning.mode,this.word)
}
ngOnInit(): void {
this.route.params.subscribe((params)=>{
  this.id = params['id']
})
  this.Cards = this.lerning.getCards(this.id)

  this.word = this.lerning.getRandom(this.Cards)
  console.log(this.word)
}
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FiszkiService } from '../services/fiszki.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LerningService } from '../services/lerning.service';
import { Fiszka } from '../models/fiszka.model';

@Component({
  selector: 'app-fiszki-lern',
  templateUrl: './fiszki-lern.component.html',
  styleUrls: ['./fiszki-lern.component.css']
})
export class FiszkiLernComponent  implements OnInit, OnDestroy{
id !: number

currentWordId:number = 0
currentCard!:any

currentWord!:any
currentDefinition!:any

correctDisplay!:number
incorrectDisplay!:number

fiszkiAmount!:number
pulaFiszek!:any

flipper:boolean = false
win !: boolean

constructor(public fiszki: FiszkiService,private router:Router,private route: ActivatedRoute, public lerning:LerningService){}

onFlip(){
  this.flipper = !this.flipper
}

onCorrect(): void{
 this.lerning.addToCorrect(this.currentCard)
 this.eventHandler()
}
onIncorrect(): void{
  this.lerning.addToIncorret(this.currentCard)
  this.eventHandler()
}
onBack(){
  this.router.navigate(['list'])
}
onRepete(){
  this.router.navigate(['list/'+this.id+'/details'])
}
eventHandler(){


  if(this.currentWordId+1 == this.fiszkiAmount){

    this.currentWordId = 0
    this.lerning.nextRound()
    this.fiszkiAmount = this.lerning.incorrectCardsBufor.length
    this.pulaFiszek = this.lerning.incorrectCardsBufor
    console.log('Nowa pula fiszek: ',this.pulaFiszek)
    console.log('loop: '+this.fiszkiAmount)
   
  }
  else{
    this.currentWordId += 1
  }
this.currentCard = this.pulaFiszek[this.currentWordId]
this.currentWord= this.currentCard.word
this.currentDefinition= this.currentCard.definition

console.log(this.fiszkiAmount)
console.log(this.currentWordId)
}

ngOnInit(): void {
  this.route.params.subscribe((params)=>{
    this.id = params['id']
    console.log(this.id)
  })
  this.lerning.Win.subscribe((data)=>{
    console.log('Win Subject: ',data)
    this.win = data
  })
  this.fiszkiAmount = this.fiszki.fiszki[this.id].cards.length
  this.currentWord = this.fiszki.fiszki[this.id].cards[this.currentWordId].word
  this.currentDefinition = this.fiszki.fiszki[this.id].cards[this.currentWordId].definition
  this.currentCard = this.fiszki.fiszki[this.id].cards[this.currentWordId]
  this.pulaFiszek = this.fiszki.fiszki[this.id].cards
}

ngOnDestroy(): void {
  this.lerning.Win.unsubscribe()
}

}

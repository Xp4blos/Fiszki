
import {Injectable} from '@angular/core'
import { Card } from '../models/card.model'
import { Subject } from 'rxjs'
import { FiszkiService } from './fiszki.service'

@Injectable({providedIn:'root'})
export class LerningService{

    correctCards:Card[] = []
    correctCardsBufor:Card[] = []


    incorrectCards:Card[] = []
    incorrectCardsBufor:Card[] = []
constructor(private fiszki:FiszkiService){}

getCorrect(){
    return this.correctCards
}
getIncorrect(){
    return this.incorrectCards
}
addToCorrect(card:Card){
    this.correctCards.push(card)
}
addToIncorret(card:Card){
    this.incorrectCards.push(card)
}
howManyCorrect(){
    return this.correctCards.length
}
howManyIncorrect(){
    return this.incorrectCards.length
}


public Win = new Subject<boolean>()
nextRound(){
this.correctCardsBufor = this.correctCards
this.incorrectCardsBufor = this.incorrectCards

this.correctCards = []
this.incorrectCards = []

console.log(this.correctCards, this.incorrectCards)
console.log(this.correctCardsBufor, this.incorrectCardsBufor)
if(this.incorrectCards.length == 0 && this.incorrectCardsBufor.length == 0){
    console.log('you won')
    this.Win.next(true)
}

}
getCards(id:any){
    return this.fiszki.fiszki[id].cards
}
getRandom(cards:Card[]){
    
    return  cards[Math.floor(Math.random()*cards.length)]
}
public mode:boolean = false
changeMode(id:number){
   let modeArray:Card[] = []
    if(this.mode){
        

        for (let i = 0; i < this.fiszki.fiszki[id].cards.length; i++) {
            let word = this.fiszki.fiszki[id].cards[i].word
            let definition = this.fiszki.fiszki[id].cards[i].definition
            modeArray[i] = new Card(definition,word)
        }

        return modeArray

    }
    else{
        return this.fiszki.fiszki[id].cards
    }
}


}
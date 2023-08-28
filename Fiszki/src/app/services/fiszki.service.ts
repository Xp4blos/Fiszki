import { Card } from "../models/card.model";
import { Fiszka } from "../models/fiszka.model";
import { UsersService } from "./users.service";
import {Injectable} from "@angular/core"



@Injectable({providedIn:'root'})
export class FiszkiService{
constructor(private usersService:UsersService){}

fiszki : Fiszka[] = [
    new Fiszka(
        'Angielski',
        'Unit-1',
        'Jan',
        [
            new Card('dog','pies'),
            new Card('cat','kot'),
            new Card('car','samochód'),
            new Card('elefant','słoń'),
        ]
    ),
    new Fiszka(
        'Angielski',
        'Unit-2',
        'Piotr',
        [
            new Card('plane','samolot'),
            new Card('ship','statek')
        ]
    ),
    new Fiszka(
        'Angielski v3',
        'Unit-3',
        'Agnieszka',
        [
            new Card('alligator','aligator'),
            new Card('ant','mrówka'),
            new Card('badger','borsuk'),
            new Card('bat','nietoper'),
            new Card('bear','niedźwiedź'),
            new Card('bird','ptak'),
            new Card('bison','bizon'),
            new Card('bull','byk'),
            new Card('camel','wielbłąd'),
            new Card('deer','jeleń'),
            new Card('fly','mucha'),
            new Card('donkey','osioł'),
            new Card('eagle','orzeł'),
            new Card('eel','węgor'),
        ]
    ),
]

getFiszka(index:number){
    return this.fiszki[index]
}
getFiszki(){
    return this.fiszki
}

}
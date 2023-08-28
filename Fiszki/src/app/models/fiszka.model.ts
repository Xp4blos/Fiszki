import { Card } from "./card.model";
import { User } from "./user.model";

export class Fiszka{
    constructor(public name:string, public desc:string, public author:string, public cards: Card[] ){}
}
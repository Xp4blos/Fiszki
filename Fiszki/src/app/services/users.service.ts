import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Fiszka } from "../models/fiszka.model";

@Injectable({providedIn:'root'})
export class UsersService{
    users: User[] = [
        new User(
            'Jan',
            'jan@kowalski.pl',
            '',
            new Date(),
            false
        ),
        new User(
            'Test',
            'x@d.pl',
            '',
            new Date(),
            false
        ),
        new User(
            'Wojciech',
            'wojtek@sliwa.pl',
            '',
            new Date(),
            false
        ),
    ]


getUserByEmail(email:string){
    for (const user of this.users) {
        if(user.email == email){
            return user.userName
        }
    }
    return ''
}
addFiszkiOwner(email:string, fiszka: Fiszka){
    for (const user of this.users) {
        if(user.email == email){
            user.fiszkiOwned?.push(fiszka)
        }
    }
}

}
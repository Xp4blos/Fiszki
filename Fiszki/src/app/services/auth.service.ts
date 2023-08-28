import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import { Subject } from "rxjs";
import { User } from "../models/user.model";

interface AuthResponseData{
    idToken:string;
    email: string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    registered?:any;
}


@Injectable({providedIn:'root'})
export class AuthService{


    userSubject = new Subject<User>()

   public loggedUserEmail!:string

    constructor(private http:HttpClient){
    }


    login(email: string, password:string){
        console.log('login: ',email,password)
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDP_uWOirzoPzi6XQ4DeINBLR2ojcOHrWc',{
            email: email,
            password: password,
            returnSecureToken: true
        })
    }
}
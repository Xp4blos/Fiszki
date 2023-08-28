import { Fiszka } from "./fiszka.model"

export class User{
    constructor(
        public userName:string, 
        public email:string,
        private _token:string, 
        private _tokenExpirationDate:Date,
        public registerd:boolean,
        public fiszkiOwned?:Fiszka[],
        public fiszkiShared?:Fiszka[]
    ){}

    get Token(){
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null
        }
        return this._token
    }

        
}
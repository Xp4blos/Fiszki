import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FiszkiService } from '../services/fiszki.service';
import { Fiszka } from '../models/fiszka.model';

@Component({
  selector: 'app-fiszki-details',
  templateUrl: './fiszki-details.component.html',
  styleUrls: ['./fiszki-details.component.css']
})
export class FiszkiDetailsComponent implements OnInit{
id !: number
fiszka !: Fiszka
constructor(private route :ActivatedRoute,private router: Router,private fiszkiService: FiszkiService){}


onLern(){
  this.router.navigate(['lern/'+this.id])
}
onRandom(){
  this.router.navigate(['random/'+this.id])
}
ngOnInit(): void {
  this.route.params.subscribe((params)=>{
    console.log(params['id'])
    this.id = params['id']
  })

  this.fiszka = this.fiszkiService.getFiszka(this.id)
}
}

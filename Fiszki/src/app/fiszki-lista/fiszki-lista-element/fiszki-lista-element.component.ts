import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Fiszka } from 'src/app/models/fiszka.model';

@Component({
  selector: 'app-fiszki-lista-element',
  templateUrl: './fiszki-lista-element.component.html',
  styleUrls: ['./fiszki-lista-element.component.css']
})
 
export class FiszkiListaElementComponent {
  @Input() fiszka !: Fiszka
  @Input() id !: number

  constructor(private router:Router){}

  onSelect(){
    this.router.navigate(['list/'+this.id+'/details'])
  }


}

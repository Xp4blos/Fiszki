import {NgModule} from '@angular/core';   
import {Routes} from '@angular/router';
import{RouterModule} from '@angular/router'
import { FiszkiListaComponent } from '../fiszki-lista/fiszki-lista.component';
import { FiszkiDetailsComponent } from '../fiszki-details/fiszki-details.component';
import { FiszkiLernComponent } from '../fiszki-lern/fiszki-lern.component';
import { FiszkiRandomComponent } from '../fiszki-random/fiszki-random.component';
import { LoginComponent } from '../login/login.component';
import { UserPageComponent } from '../user-page/user-page.component';
import { HomeComponent } from '../home/home.component';
import { AddComponent } from '../home/add/add.component';


const appRoutes: Routes = [
	{path: '', component: LoginComponent},
	{path: 'list', component: FiszkiListaComponent}, 
	{path: 'list/:id/details', component: FiszkiDetailsComponent}, 
	{path: 'lern/:id', component: FiszkiLernComponent},
	{path: 'random/:id',component: FiszkiRandomComponent},
	{path: 'user',component: UserPageComponent},
	{path: 'home',component: HomeComponent},
	{path: 'add',component: AddComponent},
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule{
}
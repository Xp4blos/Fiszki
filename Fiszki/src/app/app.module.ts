import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { FiszkiListaComponent } from './fiszki-lista/fiszki-lista.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { FiszkiListaElementComponent } from './fiszki-lista/fiszki-lista-element/fiszki-lista-element.component';
import { FiszkiDetailsComponent } from './fiszki-details/fiszki-details.component';
import { FiszkiLernComponent } from './fiszki-lern/fiszki-lern.component';
import { FiszkiRandomComponent } from './fiszki-random/fiszki-random.component';
import { FiszkiListaSharedComponent } from './fiszki-lista-shared/fiszki-lista-shared.component';
import { FiszkiListaSharedElementComponent } from './fiszki-lista-shared/fiszki-lista-shared-element/fiszki-lista-shared-element.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './user-page/user-page.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './home/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiszkiListaComponent,
    FiszkiListaElementComponent,
    FiszkiDetailsComponent,
    FiszkiLernComponent,
    FiszkiRandomComponent,
    FiszkiListaSharedComponent,
    FiszkiListaSharedElementComponent,
    NavComponent,
    LoginComponent,
    UserPageComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

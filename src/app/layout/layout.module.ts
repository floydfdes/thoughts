import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';


@NgModule({
  providers:[
    HomeComponent
  ],
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,MatButtonModule,AppRoutingModule
  ],
  exports: [NavbarComponent]
})
export class LayoutModule { }

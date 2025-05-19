import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule { }

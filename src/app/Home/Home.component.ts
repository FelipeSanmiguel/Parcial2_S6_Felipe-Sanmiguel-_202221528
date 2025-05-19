import { Component, OnInit } from '@angular/core';
import {Vuelo} from './vuelo';
import { Aerolinea } from './aerolinea';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HomeService } from './Home.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  aerolineas: Array<Aerolinea> = [];
  selectedAerolinea: Aerolinea | null = null;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getAerolineas().subscribe(aerolineas => {
      this.aerolineas = aerolineas;
    });
  }

}

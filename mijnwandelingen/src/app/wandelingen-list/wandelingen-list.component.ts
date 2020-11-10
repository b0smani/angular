import { Wandeling } from './../../shared/wandeling';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wandelingen-list',
  templateUrl: './wandelingen-list.component.html',
  styleUrls: ['./wandelingen-list.component.scss']
})
export class WandelingenListComponent implements OnInit {

  wandelingen: Wandeling[] = [{
    datum: '01-01-2020',
    naam: 'Klompenpad #1',
    stad: 'Stad #1',
    afstand: 16
  },
  {
    datum: '02-01-2020',
    naam: 'Klompenpad #2',
    stad: 'Stad #2',
    afstand: 9
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

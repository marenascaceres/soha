import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dominiohost',
  templateUrl: './dominiohost.component.html',
  styleUrls: ['./dominiohost.component.css']
})
export class DominiohostComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}

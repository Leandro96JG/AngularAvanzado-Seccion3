import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, Color } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrl: './grafica1.component.css',
})
export class Grafica1Component{

 public labels1:string[]=['Download Sales','In-Stores','Mail-Order Sales'];
 public data:number[]=[350,450,100];

  constructor() {
  }

}

import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {
 public progress1:number=28;
 public progress2:number=9;

 get getProgress1(){
  return `${this.progress1}%`;
 }

 get getProgress2(){
  return `${this.progress2}%`;
 }

//  cambioValorHijo1(value:number){
//   this.progress1=value;
//  }
//  cambioValorHijo2(value:number){
//   this.progress2=value;
//  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrl: './dona.component.css'
})
export class DonaComponent{

  private _data:number[]=[50,50,50];
  colorsGrafic:string[]=['#6857E6','#009FEE','#F02059']


  @Input('title')
  public title:string = 'Sin titulo';

  @Input('data')
  set data(value:number[]){
    this._data = value;
    this.updateChart();
  };

  get data():number[]{
    return this._data
  }



  // Doughnut
  @Input('labels')
  public doughnutChartLabels: string[] = ['label1','label2','label3'];

  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {
      data: this.data,
      label: 'Series A',
      backgroundColor:this.colorsGrafic,
      hoverBackgroundColor:this.colorsGrafic,
      hoverBorderColor:this.colorsGrafic
    },

  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
  };

  private updateChart() {

    this.doughnutChartDatasets = [
      {
        data: this._data,
        label: 'Series A',
        backgroundColor: this.colorsGrafic,
        hoverBackgroundColor: this.colorsGrafic,
        hoverBorderColor: this.colorsGrafic
      }
    ];
  }

}

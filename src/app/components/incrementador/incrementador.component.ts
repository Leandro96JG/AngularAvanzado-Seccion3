import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'component-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrl: './incrementador.component.css'
})
export class IncrementadorComponent implements OnInit{

  //!ngmodel es para los input, recibe el valor de una variable de forma bidireccional
  //!ngModelChange recibe el valor de los cambios del input

  //recibir datos del componente padre,
  //para renombrar el componente se usan ''
  // @Input('valor') public progreso: number = 23;
  @Input('valorEnviado') public progresoRecibido: number=0;
  @Input()btnClass:String = 'btn-primary';

  //esta variable es un evento, es decir, en html lo toma como ()
  //para recibir el valor del evento se usa $event como argumento
  @Output('valorRecibido')
  valorSalida:EventEmitter<number> = new EventEmitter();

  //porque la clase btn nunca cambia
  ngOnInit(): void {
    this.btnClass=`btn ${this.btnClass}`;
  }


  sumarProgreso(){
    if(this.progresoRecibido<100){
      this.progresoRecibido++;
      this.valorSalida.emit(this.progresoRecibido)
    }

  }
  restarProgreso(){
    if(this.progresoRecibido>0){
      this.progresoRecibido--;
      this.valorSalida.emit(this.progresoRecibido)
    }
  }


  onChange(event:number){
    if(event>=100){
      this.progresoRecibido=100;
    }else if(this.progresoRecibido <=0){
      this.progresoRecibido = 0;
    }else{
      this.progresoRecibido = event;
    }
    this.valorSalida.emit(this.progresoRecibido);
  }

}

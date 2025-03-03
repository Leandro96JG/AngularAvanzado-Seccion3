import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {

  constructor(){



    this.returnObs().pipe(
      retry(0)
    ).subscribe(
      {
        next: value => console.log(value),
        error: err => console.warn(err),
        complete() {
          console.log('Fin del observer');
        },
      }
    );
  }

  returnObs():Observable<number>{
    let i = 0;

   return new Observable<number>((observer)=>{


      const interval = setInterval(()=>{
        i++;
        observer.next(i);
        if(i == 5){
          clearInterval(interval);
          observer.complete();
        }
        if(i == 2){
          observer.error('Algo salio mal:')
        }
      },1000)
    });
  }
}

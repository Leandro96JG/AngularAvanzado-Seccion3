import { Component, inject, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector:'shared-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrl: './breadcrums.component.css'
})
export class BreadcrumsComponent implements OnDestroy{

  private router = inject(Router);
  public title:string='';
  public tituloSub$:Subscription;

  constructor(){
   this.tituloSub$ = this.changeTitle()
   .subscribe(({title}) =>{
    this.title = title;
  });
  }
  
  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe;
  }

  changeTitle(){
   return this.router.events
    .pipe(
      filter((event): event is ActivationEnd =>event instanceof ActivationEnd),
      filter((event:ActivationEnd) =>event.snapshot.firstChild == null),
      map((event:ActivationEnd) => event.snapshot.data)
    )

  }
}

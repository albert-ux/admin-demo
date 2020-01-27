import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscripcion: Subscription;

  constructor() { 
    
    this.suscripcion = this.regresaObservable()

    .subscribe( numero => {
      console.log('Subs', numero)},
      error => console.log('error', error),
    (  ) => console.log('el observador termino'));

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  regresaObservable() : Observable<any> {
  
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador ++ ;
        observer.next(contador);
        
        // if (contador === 3 ){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if(contador === 2){
        //   clearInterval(intervalo);
        //   observer.error('auxilio');
        // }


      }, 1000);
    }).pipe(
      map( resp => {
        return resp.valor;
      }),
      filter( (valor, index) => {
        console.log('filter', valor, index);
        if((valor % 2) === 1 ){
          return true;
        }else{
          return false;
        }
        
      })
    );

  }

}

import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.scss']
})
export class RelojComponent implements OnDestroy {
  hora=""
  clocksSubscription: Subscription
  constructor(){
    this.clocksSubscription = this.getClock().subscribe({
      next: (tiempo)=>{
        console.log('que pasara aqui', `${tiempo.getHours()}:${tiempo.getMinutes()}:${tiempo.getSeconds()}`)
        this.hora= `${tiempo.getHours()}:${tiempo.getMinutes()}:${tiempo.getSeconds()}`
      
      },       

    })
  }
  ngOnDestroy(): void {
    this.clocksSubscription.unsubscribe()
  }

  getClock(): Observable<Date>{
    return new Observable((suscriber)=>{
      setInterval(()=>{
        suscriber.next(new Date())
        
      }, 1000)
    })
  }
}

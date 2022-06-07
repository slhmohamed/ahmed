import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
    display: BehaviorSubject<any>;

constructor(){
    this.display= new BehaviorSubject('close');

}
  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open() {
      console.log("open");
      
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }
}
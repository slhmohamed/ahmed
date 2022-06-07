import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(    public router: Router,  private viewportScroller: ViewportScroller,){
    router.events
    .subscribe((event) => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
 

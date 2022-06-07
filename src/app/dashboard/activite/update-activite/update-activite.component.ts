import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-update-activite',
  templateUrl: './update-activite.component.html',
  styleUrls: ['./update-activite.component.scss']
})
export class UpdateActiviteComponent implements OnInit {
  

    display$: Observable<'open' | 'close'>;
  
    constructor(
        private modalService: ModalService
    ) {}
  
    ngOnInit() {
      this.display$ = this.modalService.watch();
      console.log(  this.display$ );
      
    }
  
    close() {
      this.modalService.close();
    }
  }
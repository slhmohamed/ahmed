import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ActionService } from 'src/app/services/action.service';
import { ActivitieService } from 'src/app/services/activites.service';
import { EtatService } from 'src/app/services/etat.service';
import { ModalService } from 'src/app/services/modal.service';
import { NodeService } from 'src/app/services/node.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-activite',
  templateUrl: './update-activite.component.html',
  styleUrls: ['./update-activite.component.scss']
})
export class UpdateActiviteComponent implements OnInit {
  

  owners:any=[]
  nodes:any=[]
  etats:any=[]
  users:any=[]
  activtyForm:FormGroup
    display$: Observable<'open' | 'close'>;
  
    constructor(private formBuilder:FormBuilder,private router:Router,
      private toastr: ToastrService, 
      private nodeService:NodeService,
      private etatService:EtatService,
      private actionService:ActionService,
      private activityService:ActivitieService,
      
      private userService:UserService,
        private modalService: ModalService
    ) {}
  
    ngOnInit() {
      this.activtyForm= this.formBuilder.group({
        owner: ['', Validators.required],
        node: ['', Validators.required],
        Title_activity: ['', Validators.required],
        Date_Implementation: ['', Validators.required],
        etat: ['', Validators.required],
        comment: ['', Validators.required],
        Change_Id: ['', Validators.required],
        
  
  
  
      })//get all node
      this.getAllEtat()
  this.getAllOwner()
  this.getAllUsers()
  this.getAllNode()
      this.display$ = this.modalService.watch();
      console.log(  this.display$ );
      
    }
  
    close() {
      this.modalService.close();
    }
  
   
    
      
  
   
    getAllOwner(){
    this.actionService.getAllAction().subscribe(res=>{
      this.owners=res
    })
  }
  getAllEtat(){
    this.etatService.getAllEtat().subscribe(res=>{
      this.etats=res
    })
  }
  
getAllUsers(){
  this.userService.getAllUser().subscribe(res=>{
    this.users=res
  })
}
  
  getAllNode(){
    this.nodeService.getAllNode().subscribe(res=>{
      this.nodes=res
    })
  } 
  
   
  onSubmit() {
    console.log(this.activtyForm.value);
  
    if (this.activtyForm.invalid) {
      return;
    }
    this.activityService.addActivitie(this.activtyForm.value).subscribe((res: any) => {
   this.toastr.success('Best Practice ajouté avec succe','Notefication!')
     
    })
  }
  
   
  
 
  
  }
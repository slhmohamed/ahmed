import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActionService } from 'src/app/services/action.service';
import { BestService } from 'src/app/services/bestPractice.service';
import { NodeService } from 'src/app/services/node.service';
import { EtatService } from './../../../services/etat.service';
import { ActivitieService } from './../../../services/activites.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.scss']
})
export class AddActiviteComponent implements OnInit {
  owners:any=[]
  nodes:any=[]
  etats:any=[]
  users:any=[]
  activtyForm:FormGroup
  
    constructor(private formBuilder:FormBuilder,private router:Router,
       private toastr: ToastrService, 
       private nodeService:NodeService,
       private etatService:EtatService,
       private actionService:ActionService,
       private activityService:ActivitieService,
       
       private userService:UserService) { }
  
    ngOnInit(): void {
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
  
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BestService } from 'src/app/services/bestPractice.service';
import { NodeService } from 'src/app/services/node.service';
import { ActionService } from './../../../services/action.service';

@Component({
  selector: 'app-add-best-practice',
  templateUrl: './add-best-practice.component.html',
  styleUrls: ['./add-best-practice.component.scss']
})
export class AddBestPracticeComponent implements OnInit {
  actions:any=[]
  nodes:any=[]
   bestForm:FormGroup
  
    constructor(private formBuilder:FormBuilder,private router:Router,
       private toastr: ToastrService, 
       private nodeService:NodeService,
       private actionService:ActionService,
       private bestService:BestService) { }
  
    ngOnInit(): void {
      this.bestForm= this.formBuilder.group({
        action: ['', Validators.required],
        node: ['', Validators.required],
       
        link: ['', Validators.required],
        
  
  
  
      })//get all node
  this.getAllAction()
 
  this.getAllNode()
  
    }
    getAllAction(){
    this.actionService.getAllAction().subscribe(res=>{
      this.actions=res
    })
  }
  
  getAllNode(){
    this.nodeService.getAllNode().subscribe(res=>{
      this.nodes=res
    })
  } 
  
   
  onSubmit() {
    console.log(this.bestForm.value);
  
    if (this.bestForm.invalid) {
      return;
    }
    this.bestService.addBest(this.bestForm.value).subscribe((res: any) => {
   this.toastr.success('Best Practice ajouté avec succe','Notefication!')
     
    })
  }
  
   
  
  }
  
import { Component, OnInit } from '@angular/core';
import { StatusService } from './../../../services/status.service';
import { NodeService } from './../../../services/node.service';
import { SeviritiesService } from './../../../services/servities.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CasesService } from './../../../services/cases.service';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-add-cases',
  templateUrl: './add-cases.component.html',
  styleUrls: ['./add-cases.component.scss']
})
export class AddCasesComponent implements OnInit {
status:any=[]
nodes:any=[]
sev:any=[]
users:any=[]
caseForm:FormGroup

  constructor(private formBuilder:FormBuilder,private router:Router,
    private caseService:CasesService,private toastr: ToastrService,
    private statusService:StatusService,private nodeService:NodeService,
    private servService:SeviritiesService,private userService:UserService) { }

  ngOnInit(): void {
    this.caseForm= this.formBuilder.group({
      title_case: ['', Validators.required],
      node: ['', Validators.required],
      description_case: ['', Validators.required],
      sevirite: ['', Validators.required],
      obenedby: ['', Validators.required],
      status: ['', Validators.required],
      creation_date: ['', Validators.required],
      last_update: ['', Validators.required],
      Update_description: ['', Validators.required],
      closure_date: ['', Validators.required],

      closure_comment: ['', Validators.required],

      timer: ['', Validators.required],




    })//get all node
this.getAllStatus()
this.getAllSev()
this.getAllNode()
    this.getAllUsers()

  }
getAllStatus(){
  this.statusService.getAllStatus().subscribe(res=>{
    this.status=res
  })
}

getAllNode(){
  this.nodeService.getAllNode().subscribe(res=>{
    this.status=res
  })
}

getAllSev(){
  this.servService.getAllServities().subscribe((res)=>{
    this.sev=res
  })
}

getAllUsers(){
  this.userService.getAllUser().subscribe(res=>{
    this.users=res
  })
}

 
onSubmit() {
  console.log(this.caseForm.value);

  if (this.caseForm.invalid) {
    return;
  }
  this.caseService.addCases(this.caseForm.value).subscribe((res: any) => {
 this.toastr.success('Case ajouté avec succe','Notefication!')
   
  })
}

 

}

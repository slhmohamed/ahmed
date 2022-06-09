import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CasesService } from 'src/app/services/cases.service';
import { NodeService } from 'src/app/services/node.service';
import { SeviritiesService } from 'src/app/services/servities.service';
import { StatusService } from 'src/app/services/status.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-cases',
  templateUrl: './update-cases.component.html',
  styleUrls: ['./update-cases.component.scss']
})
export class UpdateCasesComponent implements OnInit {
  status:any=[]
  nodes:any=[]
  sev:any=[]
  users:any=[]
  caseForm:FormGroup
  id:any=''
  
    constructor(private formBuilder:FormBuilder,private router:Router,
      private caseService:CasesService,private toastr: ToastrService,
      private statusService:StatusService,private nodeService:NodeService,
      private servService:SeviritiesService,private userService:UserService,private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
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
      
    this.nodeService.getNode(this.id).subscribe((res: any) => {
      this.caseForm.patchValue({
        'title_case': res.title_case ,
        'node': res.node ,
        'description_case': res.description_case ,
        'sevirite':  res.sevirite,
        'obenedby': res.obenedby ,
        'status': res.status ,
        'creation_date': res.creation_date ,
        'last_update': res.last_update ,
        'Update_description': res.Update_description ,
        'closure_date': res.closure_date ,
  
        'closure_comment': res.closure_comment ,
  
        'timer': res.timer ,
         
      });
  })
  
  this.getAllStatus()
  this.getAllSev()
  this.getAllNode()
      this.getAllUsers()
  
      this.caseService.getCases(this.id).subscribe((res: any) => {
        this.caseForm.patchValue({
          'Node_Name': res.Node_Name,
          'Ip_address': res.Ip_address,
        
           
        });
    })
    }
    
clearFilter(e:any){
  console.log(e.target.value);
  let DateF=new Date(e.target.value);
  let DateD=new Date(this.caseForm.value.creation_date);
  var time_diff = DateF.getTime() - DateD.getTime();
  // différence de jours
 var days_Diff = time_diff / (1000 * 3600 * 24);
  
console.log( days_Diff);

  this.caseForm.patchValue({'timer':days_Diff})
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
    this.caseService.updateCases(this.id,this.caseForm.value).subscribe((res: any) => {
   this.toastr.success('Case ajouté avec succe','Notefication!')
     
    })
  }
  
   
  
  }
  
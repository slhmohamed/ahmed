import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-update-action',
  templateUrl: './update-action.component.html',
  styleUrls: ['./update-action.component.scss']
})
export class UpdateActionComponent implements OnInit {
  actionForm:FormGroup;
  id:any=''
  constructor(private formBuilder:FormBuilder,
    private actionService:ActionService,private router:Router,
    private toastr: ToastrService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.actionForm= this.formBuilder.group({
      Name_Action: ['', Validators.required],
      description_Action: ['', Validators.required],

    })

    this.actionService.getAction(this.id).subscribe((res: any) => {
      this.actionForm.patchValue({
        'Name_Action': res.Name_Action,
        'description_Action': res.description_Action,
      
         
      });
  })
  }
  onSubmit() {
    console.log(this.actionForm.value);
 
  
    this.actionService.addAction(this.actionForm.value).subscribe((res: any) => {
   this.toastr.success('Node ajouté avec succe','Notefication!')
     
    })
  }

}

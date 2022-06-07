import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.scss']
})
export class AddActionComponent implements OnInit {
  actionForm:FormGroup
  constructor(private formBuilder:FormBuilder,private actionService:ActionService,private router:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.actionForm= this.formBuilder.group({
      Name_Action: ['', Validators.required],
      description_Action: ['', Validators.required],

    })
  }
  onSubmit() {
    console.log(this.actionForm.value);
 
  
    this.actionService.addAction(this.actionForm.value).subscribe((res: any) => {
   this.toastr.success('Node ajouté avec succe','Notefication!')
     
    })
  }

}

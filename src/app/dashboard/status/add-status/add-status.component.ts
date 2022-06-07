import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StatusService } from './../../../services/status.service';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.scss']
})
export class AddStatusComponent implements OnInit {
  statusForm:FormGroup
  constructor(private formBuilder:FormBuilder,private statusService:StatusService,private router:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.statusForm= this.formBuilder.group({
      Type: ['', Validators.required],
 
    })
  }
  onSubmit() {
    console.log(this.statusForm.value);
 
    if (this.statusForm.invalid) {
      return;
    }
    this.statusService.addStatus(this.statusForm.value).subscribe((res: any) => {
   this.toastr.success('Node ajouté avec succe','Notefication!')
     
    })
  }

}

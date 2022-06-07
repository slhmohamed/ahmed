import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SeviritiesService } from 'src/app/services/servities.service';

@Component({
  selector: 'app-add-servities',
  templateUrl: './add-servities.component.html',
  styleUrls: ['./add-servities.component.scss']
})
export class AddServitiesComponent implements OnInit {
  serForm:FormGroup
  constructor(private formBuilder:FormBuilder,private servitieService:SeviritiesService
    ,private router:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.serForm= this.formBuilder.group({
      Name_Sv: ['', Validators.required],
 
    })
  }
  onSubmit() {
    console.log(this.serForm.value);
 
    if (this.serForm.invalid) {
      return;
    }
    this.servitieService.addServities(this.serForm.value).subscribe((res: any) => {
   this.toastr.success('Seviritie ajouté avec succe','Notefication!')
     
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SeviritiesService } from 'src/app/services/servities.service';

@Component({
  selector: 'app-update-sevirity',
  templateUrl: './update-sevirity.component.html',
  styleUrls: ['./update-sevirity.component.scss']
})
export class UpdateSevirityComponent implements OnInit {
  serForm:FormGroup
  id:any=''
  constructor(private formBuilder:FormBuilder,private servitieService:SeviritiesService
    ,private router:Router,
    private toastr: ToastrService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.serForm= this.formBuilder.group({
      Name_Sv: ['', Validators.required],
 
    })
    
    this.servitieService.getServities(this.id).subscribe((res: any) => {
      this.serForm.patchValue({
        'Name_Sv': res.Name_Sv,
       
      
         
      });
  })
  }
  onSubmit() {
    console.log(this.serForm.value);
 
    if (this.serForm.invalid) {
      return;
    }
    this.servitieService.updateServities(this.id,this.serForm.value).subscribe((res: any) => {
   this.toastr.success('Seviritie ajouté avec succe','Notefication!')
     
    })
  }

}

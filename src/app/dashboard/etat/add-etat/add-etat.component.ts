import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EtatService } from 'src/app/services/etat.service';

@Component({
  selector: 'app-add-etat',
  templateUrl: './add-etat.component.html',
  styleUrls: ['./add-etat.component.scss']
})
export class AddEtatComponent implements OnInit {
  etatForm:FormGroup
  constructor(private formBuilder:FormBuilder,private etatService:EtatService,private router:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.etatForm= this.formBuilder.group({
      Etat_Name: ['', Validators.required],
       

    })
  }
  onSubmit() {
    
 
    this.etatService.addEtat(this.etatForm.value).subscribe((res: any) => {
  
      this.toastr.success('Etat a été ajouté avec succès', 'Notification');

  
    
     
    })
  }

}

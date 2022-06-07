import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.scss']
})
export class AddNodeComponent implements OnInit {
  nodeForm:FormGroup
  constructor(private formBuilder:FormBuilder,private nodeService:NodeService,private router:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.nodeForm= this.formBuilder.group({
      Node_Name: ['', Validators.required],
      Ip_address: ['', Validators.required],

    })
  }
  onSubmit() {
    console.log(this.nodeForm.value);
 
    if (this.nodeForm.invalid) {
      return;
    }
    this.nodeService.addNode(this.nodeForm.value).subscribe((res: any) => {
   this.toastr.success('Node ajouté avec succe','Notefication!')
     
    })
  }

}

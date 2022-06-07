import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-update-node',
  templateUrl: './update-node.component.html',
  styleUrls: ['./update-node.component.scss']
})
export class UpdateNodeComponent implements OnInit {
  nodeForm:FormGroup
  id:any=''
  constructor(private formBuilder:FormBuilder,private nodeService:NodeService,private router:Router,
    private toastr: ToastrService,private route: ActivatedRoute,) { }

  ngOnInit(): void {

    
    this.id = this.route.snapshot.paramMap.get('id');


    this.nodeForm= this.formBuilder.group({
      Node_Name: ['', Validators.required],
      Ip_address: ['', Validators.required],

    })

    
    this.nodeService.getNode(this.id).subscribe((res: any) => {
      this.nodeForm.patchValue({
        'Node_Name': res.Node_Name,
        'Ip_address': res.Ip_address,
      
         
      });
  })
}
  onSubmit() {
    console.log(this.nodeForm.value);
 
    if (this.nodeForm.invalid) {
      return;
    }
    this.nodeService.updateNode(this.id,this.nodeForm.value).subscribe((res: any) => {
   this.toastr.success('Node ajouté avec succe','Notefication!')
     
    })
  }
  

}

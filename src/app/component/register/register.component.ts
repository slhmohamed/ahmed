import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../login/login.component';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
 
  submittedr = false;
 
  constructor(private formBuilder: FormBuilder,
    private router:Router,private authService:AuthService,
    private userService:UserService,
    private toastr: ToastrService) {
    }

  ngOnInit() {
    
   
       this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: ['', Validators.required],
      
        groups: ['', Validators.required],


       });
  }

  // convenience getter for easy access to form fields
   get fr() { return this.registerForm.controls; }
  
  
  onSubmitr() {
    let array=[]
    array.push(this.registerForm.value.groups)
    let obj={
      'email':this.registerForm.value.email ,
      'username': this.registerForm.value.username ,
      'password': this.registerForm.value.password ,
      'groups': array  ,

    }
    console.log(obj);
    
    this.authService.newUser(this.registerForm.value).subscribe((res:any)=>{
      this.toastr.success('Compte a été créé avec succès', 'Notification');
      
    this.onResetr()
    } )
}
onResetr() {
    this.submittedr= false;
    this.registerForm.reset();
}
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { 
loginForm:FormGroup
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    })
  }
  onSubmit() {
    console.log(this.loginForm.value);
 
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe((res: any) => {
  
       localStorage.setItem('tokn',res.token)
       localStorage.setItem('role',res.role)
       this.router.navigate(['/dashboard/ajout-responsable'])
    
     
    })
  }

}

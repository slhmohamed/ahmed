import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  role: string | null;

  constructor(private router:Router) { }
  ngOnInit(): void {
    this.role=localStorage.getItem('role')
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    this.router.navigate(['/'])
  }

}

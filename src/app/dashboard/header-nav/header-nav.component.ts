import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  constructor(private router:Router) { }
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/'])
  }
}

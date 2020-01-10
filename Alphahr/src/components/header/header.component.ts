import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authenticated.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent   {
 currentUser: User;
  balance:any={}
  constructor(private cdRef: ChangeDetectorRef,
    private router: Router,
    
    private authenticationService: AuthenticationService) 
      {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }


ngOnInit() {
 
 
 }



  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
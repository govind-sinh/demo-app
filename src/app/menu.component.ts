import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  constructor(public router: Router,private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}

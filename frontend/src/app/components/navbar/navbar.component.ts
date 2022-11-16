import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public loggedIn:boolean=false;

  constructor(private Auth : AuthService,
    private router : Router,
    private Token :TokenService) { }

  ngOnInit():void{
   this.Auth.authStatus.subscribe(value => this.loggedIn = value);
// this.loggedIn = this.Auth.authStatus;
  }
  logout(event:MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');

  }

}

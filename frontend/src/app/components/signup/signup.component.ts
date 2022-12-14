
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form ={
    email:null,
    name:null,
    password:null,
    password_confirmation:null
  };

  public error = [];

  constructor(
    private Jarwis: JarwisService,
    private Token : TokenService,
    private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
   this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
       );
  }

  handleResponse(data:any){
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');

  }


  handleError(error:any){
    this.error = error.error.errors;
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  UserData: any;

  constructor(private bnIdle: BnNgIdleService,
    private router :Router,
    private dataservice : DataService
    ) { }

  ngOnInit(): void {
this.getUsersD();
    this.bnIdle.startWatching(3000).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        console.log('session expired');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        this.router.navigateByUrl('/login');
        this.bnIdle.stopTimer();


      }
    });
  }

  getUsersD(){
    this.dataservice.getUsersdata().subscribe(res =>{
    // console.log('hii',res);
    this.UserData = res;
    })
    }

}

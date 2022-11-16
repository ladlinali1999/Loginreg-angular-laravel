import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { BnNgIdleService } from 'bn-ng-idle'; // import it to your component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  // constructor(private bnIdle: BnNgIdleService,
  //   private router :Router) {

  // }

  // initiate it in your component OnInit
  ngOnInit(): void {
    // this.bnIdle.startWatching(10).subscribe((isTimedOut: boolean) => {
    //   if (isTimedOut) {
    //     console.log('session expired');
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('email');
    //     this.router.navigateByUrl('/login');
    //     this.bnIdle.stopTimer();


    //   }
    // });
  }
}

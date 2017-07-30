import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { PaypalService } from "app/index";


@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.scss']
})
export class PayoutComponent {

  id: string = '';
  

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public paypalService: PaypalService) {
  }

  ngOnInit() {
    const sub = this.activatedRoute.params.subscribe(this.listenParam); 
  }

  private listenParam = (params) => {
    this.id = params['id'];
    console.log('ID : ', this.id);
    if (this.id == 'login') {
      this.paypalService.getAuthorizeUrl().subscribe((data) => {});
    }
    if (this.id == 'payout') {
      this.paypalService.authorizeCode = this.activatedRoute.snapshot.queryParams["code"];
      console.log( ' ~~--> ', this.paypalService.authorizeCode );
      if (!this.paypalService.authorizeCode) {
        alert(" test - no authorizeCode ");
        this.router.navigate(['/payout/login']);
      }
      this.paypalService.getUserInfo().subscribe((data) => {
        console.log( this.paypalService.userinfo )
        if (!this.paypalService.userinfo) {
          alert(" test - no userinfo ");
          this.router.navigate(['/payout/login']);
        }
      });;
    }
    if (this.id == 'success') {

    }
  };

  login(amount: string) {
    this.paypalService.getAuthorizeUrl().subscribe((data) => {
      this.paypalService.login(amount);
    });
  }

  payout() {
    console.log(this.paypalService.amount, ' || ', this.paypalService.userinfo);
    if (!this.paypalService.amount || !this.paypalService.userinfo) {
      //alert(" test - no authorizeCode ");
      //this.router.navigate(['/payout/login']);
      //return;
    }
    this.paypalService.payout().subscribe((data:any) => {
      console.log(data);
      if ( data.links[0] ) {
        this.router.navigate(['/payout/success']);        
      } else {
        alert(' no no no ');
      }
    });
  }

  backToLogin(){
    this.router.navigate(['/payout/login']);
  }




}
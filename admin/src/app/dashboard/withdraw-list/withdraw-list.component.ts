import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { WithdrawService } from "app/shared/withdraw.service";


@Component({
    templateUrl: './withdraw-list.component.html'
})
export class WithdrawListComponent {

    id;
    rows;
    withdraws;

 
    constructor(private activatedRoute: ActivatedRoute, private router: Router,
        private withdrawService: WithdrawService ){    
        this.withdrawService.getAll().subscribe((data) => {
            this.withdraws = data;
        });
    }


    ngOnInit() {

        const sub = this.activatedRoute.params.subscribe((params) => {
            this.id = params['id'];
            if ( this.id == 'current' ) {
                console.log( 'current' );
                this.rows = this.withdraws.filter((withdraw)=>{
                    if ( !withdraw.confirmed && !withdraw.rejected ) return true;
                });
            } else if ( this.id == 'past' ) {
                console.log( 'past' );
                this.rows = this.withdraws.filter((withdraw)=>{
                    if ( withdraw.confirmed ) return true;
                });
            }  else if ( this.id == 'rejected' ) {
                console.log( 'rejected' );
                this.rows = this.withdraws.filter((withdraw)=>{
                    if ( withdraw.rejected ) return true;                    
                })
            }  else {
                console.log( " id : ", this.id );
                this.router.navigate([ '/dashboard/withdraw-list', 'current' ]);
            } 
        }); 

    }



    setWithdrawList(id) {
        //this.id = id;
        this.router.navigate([ '/dashboard/withdraw-list', id ]);
    }

    confirm(row){
        row.confirmed = true;
    }

    reject(row) {
        row.rejected = true;
    }

    

}
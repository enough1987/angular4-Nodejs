import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { WithdrawService } from "app/shared/withdraw.service";


@Component({
    templateUrl: './withdraw-list.component.html'
})
export class WithdrawListComponent {

    rejectedRow: any;
    id;
    rows;
    withdraws;


    constructor(private activatedRoute: ActivatedRoute, private router: Router,
        private withdrawService: WithdrawService) {
        this.withdrawService.getAll().subscribe((data) => {
            this.withdraws = data;
            //this.rows = data;
        });
    }


    ngOnInit() {

        const sub = this.activatedRoute.params.subscribe((params) => {
            this.id = params['id'];

            this.setRows();

        });

    }

    setRows(){
            let rows = [];
            if (this.id == 'current') {
                console.log('current');
                for ( let i = 0, j = 0 ; i < this.withdraws.length ; i++) {
                    if (!this.withdraws[i].confirmed && !this.withdraws[i].rejected) {
                        rows[j] = this.withdraws[i];
                        j++; 
                    }
                }
                this.rows = rows.sort(this.sort);
            } else if (this.id == 'past') {
                console.log('past');
                for ( let i = 0, j = 0 ; i < this.withdraws.length ; i++) {
                    if (this.withdraws[i].confirmed) {
                        rows[j] = this.withdraws[i];
                        j++; 
                    }
                }
                this.rows = rows.sort(this.sort);
            } else if (this.id == 'rejected') {
                console.log('rejected');
                for ( let i = 0, j = 0 ; i < this.withdraws.length ; i++) {
                    if (this.withdraws[i].rejected) {
                        rows[j] = this.withdraws[i];
                        j++; 
                    }
                }
                this.rows = rows.sort(this.sort);
            } else {
                console.log(" id : ", this.id);
                this.router.navigate(['/dashboard/withdraw-list', 'current']);
            }
    }

    msToTime(ms) {
        let d = new Date(null);
        d.setMilliseconds(ms);
        return d.toLocaleTimeString();
    }

    sort(a, b) {
        if ( a.time > b.time ) {
            return -1;
        }
        if ( a.time < b.time ) {
            return 1;
        }
        return 0;
    }

    setList(id) {
        this.router.navigate(['/dashboard/withdraw-list', id]);
    }

    openRejectModal(row){
        this.rejectedRow = row;
    }

    clickOkCancelModal(){
        delete this.rejectedRow;
    }

    clickOkOnModal(){
        this.reject(this.rejectedRow);
        delete this.rejectedRow;
    }

    reject(row) {
        row.rejected = true;
        this.setRows();
    }

    confirm(row) {
        row.confirmed = true;
        this.setRows();
    }



}
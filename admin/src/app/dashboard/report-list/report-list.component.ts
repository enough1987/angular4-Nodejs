import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";


import { ReportsService } from "app/shared/reports.service";


@Component({
    templateUrl: './report-list.component.html'
})
export class ReportsListComponent {


    id: string; // = 'broadcasters';
    rows;
    columns;


    @ViewChild('myTable') table: any;

    constructor(private activatedRoute: ActivatedRoute, private router: Router,
        private reportsService: ReportsService){    
    }


    ngOnInit() {

        const sub = this.activatedRoute.params.subscribe((params) => {
            this.id = params['id'];
            if ( this.id == 'broadcasters' ) {
                let rows = this.reportsService.getAllBroadcasters();
                this.rows = rows.sort(this.sort);
                if( this.table ) this.table.bodyHeight = '78vh';
            }  else if ( this.id == 'chatReports' ) {
                let rows = this.reportsService.getAllChatReports();
                this.rows = rows.sort(this.sort);
                if( this.table ) this.table.bodyHeight = '78vh';
            }  else {
                console.log( " id : ", this.id );
                this.router.navigate([ '/dashboard/report-list', 'broadcasters' ]);
            } 
        }); 

    }

    ngAfterViewInit() {
    }

    msToTime(ms) {
        let d = new Date(null);
        d.setMilliseconds(ms);
        return d.toLocaleTimeString();
    }

    sort = (a, b) => {
        let minA = this.getMin(a);
        let minB = this.getMin(b);
        if ( minA > minB ) {
            return -1;
        }
        if ( minA < minB ) {
            return 1;
        }
        return 0;
    };

    getMin(arr){
        let min = arr[0].time;
        arr.forEach( el => {
            if( el.time < min ) min = el.time;
        });
        return min;
    }


    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }

    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }

    setReportListId(id) {
        //this.id = id;
        this.router.navigate([ '/dashboard/report-list', id ]);
    }


    ban(item){
        console.log( "item : ", item );
    }


}
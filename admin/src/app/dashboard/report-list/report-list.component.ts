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
                this.rows = this.reportsService.getAllBroadcasters();
                if( this.table ) this.table.bodyHeight = '78vh';
            }  else if ( this.id == 'chatReports' ) {
                this.rows = this.reportsService.getAllChatReports();
                if( this.table ) this.table.bodyHeight = '78vh';
            }  else {
                console.log( " id : ", this.id );
                this.router.navigate([ '/dashboard/report-list', 'broadcasters' ]);
            } 
        }); 


    }

    ngAfterViewInit() {
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
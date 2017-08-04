import { Component, ViewChild } from '@angular/core';


@Component({
    templateUrl: './report-list.component.html'
})
export class ReportsListComponent {


    id: string = 'broadcasters';
    rows;
    columns;


    @ViewChild('myTable') table: any;

    ngOnInit() {

        this.rows = [
            [
                { userId: 1, roomId: 1, reason: " first one ", userName: 'Bob' }
            ],
            [
                { userId: 2, roomId: 2, reason: " second one ", userName: 'John' },
                { userId: 2, roomId: 2, reason: " second one ", userName: 'John' }
            ],
            [
                { userId: 3, roomId: 3, reason: " first tree ", userName: 'Rev' }
            ],
            [
                { userId: 4, roomId: 4, reason: " first 4 ", userName: 'Fal' }
            ],
            [
                { userId: 5, roomId: 5, reason: " first 5 ", userName: 'Oda' }
            ],
            [
                { userId: 6, roomId: 6, reason: " first 6 ", userName: 'Yee' }
            ],
            [
                { userId: 7, roomId: 7, reason: " first 7 ", userName: 'VeLe' }
            ],
            [
                { userId: 8, roomId: 8, reason: " first 8 ", userName: 'Max' }
            ]
        ];

    }


    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }

    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }

    setReportListId(id) {
        this.id = id;
    }


}
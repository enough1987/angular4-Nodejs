
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    templateUrl: './users-list.component.html'
})
export class UsersListComponent {

    id;
    rows;

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {

        const sub = this.activatedRoute.params.subscribe((params) => {
            this.id = params['id'];

            this.setRows();

        });

    }

    setRows() {
        let rows = [];
        if (this.id == 'live') {
            console.log('live');

        } else if (this.id == 'banned') {
            console.log('banned');

        } else if (this.id == 'income') {
            console.log('income');

        } else {
            console.log(" id : ", this.id);
            this.router.navigate(['/dashboard/users-list', 'live']);
        }
    }

    setList(id) {
        this.router.navigate(['/dashboard/users-list', id]);
    }


}
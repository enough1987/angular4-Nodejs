
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";


import { UsersService } from "app/shared/users.services";


@Component({
    templateUrl: './users-list.component.html'
})
export class UsersListComponent {

    id;
    rows;
    users;

    constructor(private activatedRoute: ActivatedRoute, private router: Router,
        private usersService: UsersService) {
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
            this.usersService.getLive().subscribe((data) => {
                this.rows = data;
            });
        } else if (this.id == 'banned') {
            console.log('banned');
            this.usersService.getBanned().subscribe((data) => {
                this.rows = data;
            });
        } else if (this.id == 'income') {
            console.log('income');
            this.usersService.getIncome().subscribe((data) => {
                this.rows = data;
            });
        } else {
            console.log(" id : ", this.id);
            this.router.navigate(['/dashboard/users-list', 'live']);
        }
    }

    setList(id) {
        this.router.navigate(['/dashboard/users-list', id]);
    }

    ban(row) {
        console.log(row);
    }

    warn(row) {
        console.log(row);
    }


}
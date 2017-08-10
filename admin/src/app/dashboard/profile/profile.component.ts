
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";


import { UsersService } from "app/shared/users.services";


@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent {

    id;
    type;

    constructor(private activatedRoute: ActivatedRoute, private router: Router,
        private usersService: UsersService) {
    }

    ngOnInit() {

        const sub = this.activatedRoute.params.subscribe((params) => {

            this.id = params['id'];
            this.type = params['type'];

            if ( !this.type ) this.router.navigate(['/dashboard/profile/info']);

        });

    }

    setType(type) {
        console.log( " type ", type );
        if ( this.id ) this.router.navigate(['/dashboard/profile/' + type, this.id ]);
        if ( ! this.id ) this.router.navigate(['/dashboard/profile/' + type ]);
    }

    search(value){

    }


}
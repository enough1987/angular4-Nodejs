import { Component } from '@angular/core';


import { GiftsService } from "app/shared/gifts.service";


@Component({
    templateUrl: './gifts.component.html'
})
export class GiftsComponent {

    resources;
    newResource: any = {};
    isAdd: boolean = false;
    removeItem;

    constructor(public resourcesService: GiftsService) {
        this.resourcesService.getAll().subscribe((data) => {
            this.resources = data;
        });
    }

    setEditMode(resource) {
        resource.editMode = true;
    }

    toggleAdd() {
        this.newResource = {};
        this.isAdd = !this.isAdd;
    }

    add() {
        this.resourcesService.add(this.newResource).subscribe((data) => {
            this.newResource.errors = false;
            this.resources.push(this.newResource);
            this.toggleAdd();
        }, (err) => {
            this.newResource.errors = err;
            console.log(err);
        });
    }

    edit(resource) {
        console.log( " resource ", resource );
        this.resourcesService.edit(resource).subscribe((data) => {
            resource.editMode = false;
            resource.errors = false;
        }, (err) => {
            resource.errors = err;
            console.log(err);
        });
    }

    openRemoveModal(row){
        this.removeItem = row;
    }

    cancelRemove() {
        delete this.removeItem;
    }

    remove() {
        console.log( this.removeItem );
        this.resourcesService.remove(this.removeItem.id).subscribe((data) => {
            for (var i = this.resources.length - 1; i >= 0; i--) {
                if (this.resources[i].id === this.removeItem.id) {
                    this.resources.splice(i, 1);
                }
            }
            delete this.removeItem;
        }, (err) => {
            console.log(err);
        });

    }


}
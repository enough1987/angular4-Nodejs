import { Component } from '@angular/core';


import { ResourcesService } from "app/shared/resources.service";


@Component({
    templateUrl: './purchases.component.html'
})
export class PurchasesComponent {

    resources;
    newResource: any = {};
    isAdd: boolean = false;
    removeItem;

    constructor(public resourcesService: ResourcesService) {
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
            delete this.newResource.errors;
            this.resources.push(this.newResource);
            this.toggleAdd();
        }, (err) => {
            this.newResource.errors = err;
            console.log(err);
        });
    }

    edit(resource) {
        this.resourcesService.edit(resource).subscribe((data) => {
            delete resource.errors;
            resource.editMode = false;
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
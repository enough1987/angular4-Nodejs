import { Component } from '@angular/core';


import { ResourcesService } from "app/shared/resources.service";


@Component({
    templateUrl: './purchases.component.html'
})
export class PurchasesComponent {

    resources;
    newResource: any = {};
    isAdd: boolean = false;

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
            delete this.newResource.error;
            this.resources.push(this.newResource);
            this.toggleAdd();
        }, (err) => {
            this.newResource.error = true;
            console.log(err);
        });
    }

    edit(resource) {
        this.resourcesService.edit(resource).subscribe((data) => {
            resource.editMode = false;
            resource.error = false;
        }, (err) => {
            resource.error = true;
            console.log(err);
        });
    }

    remove(resource) {
        console.log( resource );
        this.resourcesService.remove(resource.id).subscribe((data) => {
            for (var i = this.resources.length - 1; i >= 0; i--) {
                if (this.resources[i].id === resource.id) {
                    this.resources.splice(i, 1);
                }
            }
        }, (err) => {
            console.log(err);
        });

    }


}
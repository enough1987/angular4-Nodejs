import { Component } from '@angular/core';


<<<<<<< HEAD
import { DashboardDataService } from "app/shared/dashboard-data.service";
=======
import { ResourcesService } from "app/shared/resources.service";
>>>>>>> 61774dae2da11322e547ecdfd89c50e63bb32977


@Component({
    templateUrl: './purchases.component.html'
})
export class PurchasesComponent {

<<<<<<< HEAD
    purchases;
    newPurchase = {};
    isAddPurchase: boolean = false;

    constructor(private dashboardDataService: DashboardDataService) {
        this.dashboardDataService.getPurchases().subscribe((data) => {
            this.purchases = data;
        });
    }

    toggleAddPurchase() {
        this.isAddPurchase = !this.isAddPurchase;
    }

    addPurchase() {
        if ( this.newPurchase.constructor !== Object || (Object.keys(this.newPurchase).length < 6 ) ) {
            console.log( this.newPurchase );
            return;
        }
        this.dashboardDataService.addPurchase().subscribe((data)=>{
            this.purchases.push(this.newPurchase);
            this.newPurchase = {};
            this.isAddPurchase = false;
        }, (err)=>{
            
        });
    }

    setEditPurchaseMode(purchase) {
        purchase.editPurchaseMode = true;
    }

    savePurchase(purchase) {
        purchase.editPurchaseMode = false;
    }

    removePurchase(purchase) {
        for (var i = this.purchases.length - 1; i >= 0; i--) {
            if (this.purchases[i].id === purchase.id) {
                this.purchases.splice(i, 1);
=======
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
>>>>>>> 61774dae2da11322e547ecdfd89c50e63bb32977
            }
        }
    }


}
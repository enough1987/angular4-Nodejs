import { Component } from '@angular/core';


import { DashboardDataService } from "app/shared/dashboard-data.service";


@Component({
    templateUrl: './purchases.component.html'
})
export class PurchasesComponent {

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
            }
        }
    }


}
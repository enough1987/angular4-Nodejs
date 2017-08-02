import { Component } from '@angular/core';


import { PurchasesService } from "app/shared/purchases.service";


@Component({
    templateUrl: './purchases.component.html'
})
export class PurchasesComponent {

    purchases;
    newPurchase: any = {};
    isAddPurchase: boolean = false;

    constructor(public purchasesService: PurchasesService) {
        this.purchasesService.getAll().subscribe((data) => {
            this.purchases = data;
        });
    }

    setEditPurchaseMode(purchase) {
        purchase.editPurchaseMode = true;
    }

    toggleAddPurchase() {
        this.newPurchase = {};
        this.isAddPurchase = !this.isAddPurchase;
    }

    addPurchase(purchase) {
        this.purchasesService.add(purchase).subscribe((data) => {
            this.purchases.push(this.newPurchase);
            this.toggleAddPurchase();
        }, (err) => {
            this.newPurchase.error = true;
            console.log(err);
        });
    }

    editPurchase(purchase) {
        this.purchasesService.edit(purchase).subscribe((data) => {
            purchase.editPurchaseMode = false;
            purchase.error = false;
        }, (err) => {
            purchase.error = true;
            console.log(err);
        });
    }

    removePurchase(purchase) {
        console.log( purchase );
        this.purchasesService.remove(purchase.id).subscribe((data) => {
            for (var i = this.purchases.length - 1; i >= 0; i--) {
                if (this.purchases[i].id === purchase.id) {
                    this.purchases.splice(i, 1);
                }
            }
        }, (err) => {
            console.log(err);
        });

    }


}
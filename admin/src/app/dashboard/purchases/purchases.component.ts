import { Component } from '@angular/core';


@Component({
    templateUrl: 'purchases.component.html'
})
export class PurchasesComponent {

    purchases;
    isAddPurchase: boolean = false;

    constructor() {
        this.purchases = [
            { id: 1, orderNumber: "1", discountCheckbox: "1", packageImage: "1", giftSimple: 1, giftRare: 1, giftExcellent: 1 }, 
            { id: 2, orderNumber: "2", discountCheckbox: "2", packageImage: "2", giftSimple: 2, giftRare: 2, giftExcellent: 2 }, 
            { id: 3, orderNumber: "3", discountCheckbox: "3", packageImage: "3", giftSimple: 3, giftRare: 3, giftExcellent: 3 }, 
            { id: 4, orderNumber: "4", discountCheckbox: "4", packageImage: "4", giftSimple: 4, giftRare: 4, giftExcellent: 4 }
        ];
    }

    toggleAddPurchase() {
        this.isAddPurchase = !this.isAddPurchase;
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
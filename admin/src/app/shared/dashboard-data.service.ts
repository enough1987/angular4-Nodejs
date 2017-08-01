import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";


@Injectable()
export class DashboardDataService {


    constructor() {
    }

    getPurchases() {
        return Observable.create(observer => {
            observer.next([
                { id: 1, orderNumber: "1", discountCheckbox: "1", packageImage: "1", giftSimple: 1, giftRare: 1, giftExcellent: 1 },
                { id: 2, orderNumber: "2", discountCheckbox: "2", packageImage: "2", giftSimple: 2, giftRare: 2, giftExcellent: 2 },
                { id: 3, orderNumber: "3", discountCheckbox: "3", packageImage: "3", giftSimple: 3, giftRare: 3, giftExcellent: 3 },
                { id: 4, orderNumber: "4", discountCheckbox: "4", packageImage: "4", giftSimple: 4, giftRare: 4, giftExcellent: 4 }
            ]);
            observer.complete();
        });
    }

    addPurchase() {
        return Observable.create(observer => {
            Observable.create(observer => {
                observer.next({ purchase: {} });
            });
            observer.complete();
        });
    }

}
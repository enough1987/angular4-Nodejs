import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WithdrawService {


    getAll() {
        return Observable.create(observer => {
            observer.next([
            { time: "21.09 21:00", userId: 1212, email: "sasha@gmail.com", sum: 200, confirmed: false, rejected: false },
            { time: "22.09 22:00", userId: 2323, email: "sasha@gmail.com", sum: 300, confirmed: false, rejected: true },
            { time: "21.09 23:00", userId: 3434, email: "sasha@gmail.com", sum: 400, confirmed: false, rejected: true },
            { time: "21.09 24:00", userId: 4545, email: "sasha@gmail.com", sum: 500, confirmed: true, rejected: false },
            { time: "22.09 01:32", userId: 5656, email: "sasha@gmail.com", sum: 600, confirmed: false, rejected: false },
            { time: "22.09 01:44", userId: 5656, email: "sasha@gmail.com", sum: 600, confirmed: false, rejected: false },
            { time: "22.09 01:54", userId: 5656, email: "sasha@gmail.com", sum: 600, confirmed: false, rejected: false },
            { time: "22.09 01:55", userId: 5656, email: "sasha@gmail.com", sum: 600, confirmed: false, rejected: false },
            { time: "22.09 01:00", userId: 5656, email: "sasha@gmail.com", sum: 600, confirmed: false, rejected: false },
            { time: "22.09 01:01", userId: 5656, email: "sasha@gmail.com", sum: 600, confirmed: false, rejected: false },
            { time: "22.09 01:02", userId: 5656, email: "sasha@gmail.com", sum: 600, confirmed: false, rejected: false },
            { time: "22.09 01:03", userId: 5656, email: "sasha@gmail.com", sum: 600, confirmed: false, rejected: false }
        ]);
            observer.complete();
        });
    }


}
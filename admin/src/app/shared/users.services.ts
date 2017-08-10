import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersService {

    getById(id){
        return Observable.create(observer => {
            observer.next({ 
                live: true, userId: 5567, roomId: 78787, 
                roomTime: 500, viewers: 45, banned: false, warned: false 
            });
            observer.complete();
        });
    }

    search(value){
        return Observable.create(observer => {
            observer.next([
            { live: true, userId: 1212, roomId: 123434, roomTime: 200, viewers: 1003, banned: false, warned: false },
            { live: false, userId: 2323, roomId: 23445, roomTime: 500, viewers: 143, banned: false, warned: false },
            { live: false, userId: 3434, roomId: 4545, roomTime: 700, viewers: 1, banned: true, warned: false },
            { live: false, userId: 4545, roomId: 76767, roomTime: 800, viewers: 100300, banned: true, warned: true },
            { live: true, userId: 5567, roomId: 78787, roomTime: 500, viewers: 45, banned: false, warned: false }
        ]);
            observer.complete();
        });
    }

    getLive() {
        return Observable.create(observer => {
            observer.next([
            { live: true, userId: 1212, roomId: 123434, roomTime: 200, viewers: 1003, banned: false, warned: false },
            { live: true, userId: 2323, roomId: 23445, roomTime: 500, viewers: 143, banned: false, warned: false },
            { live: true, userId: 3434, roomId: 4545, roomTime: 700, viewers: 1, banned: false, warned: false },
            { live: true, userId: 4545, roomId: 76767, roomTime: 800, viewers: 100300, banned: false, warned: true },
            { live: true, userId: 5567, roomId: 78787, roomTime: 500, viewers: 45, banned: false, warned: false }
        ]);
            observer.complete();
        });
    }

    getBanned() {
        return Observable.create(observer => {
            observer.next([
            { userId: 1212, roomId: 2, reason: " second one ", complainant: 'John', banned: true, warned: true },
            { userId: 5567, roomId: 2, reason: " second one ", complainant: 'John', banned: true, warned: false }
        ]);
            observer.complete();
        });
    }

    getIncome() {
        return Observable.create(observer => {
            observer.next([
            { userId: 9888, roomId: 343455, roomTime: 2400, viewers: 10103, banned: false, warned: false, income: 100 },
            { userId: 4444, roomId: 4545, roomTime: 241, viewers: 9999, banned: false, warned: false, income: 58 },
            { userId: 9987, roomId: 676767, roomTime: 5700, viewers: 4655, banned: false, warned: false, income: 0 }
        ]);
            observer.complete();
        });
    }


}
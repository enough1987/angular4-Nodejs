import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { ResourcesService } from "app/shared/resources.service";


@Injectable()
export class GiftsService extends ResourcesService {


    constructor(protected http: Http) {
        super(http);
        this.config('http://localhost:3000/api/gifts');
    }

    getAll() {
        return Observable.create(observer => {
            observer.next([
                {
                    id: 1, order: "1", value: "1", 
                    imgUrl: "http://localhost:3000/uploads/2.png",
                    imgBigUrl: "http://localhost:3000/uploads/2.png",
                    type: "cool"
                },
                {
                    id: 2, order: "2", value: "2", 
                    imgUrl: "http://localhost:3000/uploads/2.png",
                    imgBigUrl: "http://localhost:3000/uploads/2.png",
                    type: "cool"
                },
                {
                    id: 3, order: "3", value: "3", 
                    imgUrl: "http://localhost:3000/uploads/2.png",
                    imgBigUrl: "http://localhost:3000/uploads/2.png",
                    type: "cool"
                },
                {
                    id: 4, order: "4", value: "4", 
                    imgUrl: "http://localhost:3000/uploads/2.png",
                    imgBigUrl: "http://localhost:3000/uploads/2.png",
                    type: "cool"
                }
            ]);
            observer.complete();
        });
    }

    isValid(resource) {
        let valid: boolean = true;
        if ( ! resource.id ) valid = false;
        if ( ! /^[0-9]{1,3}$/.test(resource.order) && resource.order ) valid = false;
        if ( ! /^[0-9]{1,1000}$/.test(resource.value) && resource.discount ) valid = false;
        if ( ! resource.imgUrl ) valid = false;
        if ( ! resource.imgBigUrl ) valid = false;
        if ( ! resource.type ) valid = false;
        console.log(" valid ", valid);
        return valid;
    }

    setProp(resource, type , value ) {
        resource[type] = value;
    }


}
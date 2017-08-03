import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ResourcesService {


    filesToUpload: Array<File> = [];
    protected url: string = 'http://localhost:3000/api/purchases';

    constructor(protected http: Http) {
    }

    config(url) {
        this.url = url;
    }

    getAll() {
        return Observable.create(observer => {
            observer.next([
                {
                    id: 1, order: "1", discount: "1", packageImage: "1", simple: 1, rare: 1, excellent: 1,
                    imgUrl: "http://localhost:3000/uploads/1.jpg"
                },
                {
                    id: 2, order: "2", discount: "2", packageImage: "2", simple: 2, rare: 2, excellent: 2,
                    imgUrl: "http://localhost:3000/uploads/1.jpg"
                },
                {
                    id: 3, order: "3", discount: "3", packageImage: "3", simple: 3, rare: 3, excellent: 3,
                    imgUrl: "http://localhost:3000/uploads/1.jpg"
                },
                {
                    id: 4, order: "4", discount: "4", packageImage: "4", simple: 4, rare: 4, excellent: 4,
                    imgUrl: "http://localhost:3000/uploads/1.jpg"
                }
            ]);
            observer.complete();
        });
    }

    add(resource) {
        return Observable.create(observer => {
            if (this.isValid(resource)) {
                observer.next({ resource: {} });
            } else {
                observer.error({});
            }
            observer.complete();
        });
    }

    edit(resource) {
        return Observable.create(observer => {
            if (this.isValid(resource)) {
                observer.next({ resource: {} });
            } else {
                observer.error({});
            }
            observer.complete();
        });
    }

    remove(resourceId) {
        return Observable.create(observer => {
            observer.next({ resourceId: resourceId });
            observer.complete();
        });
    }

    isValid(resource) {
        let valid: boolean = true;
        if (!resource.id) valid = false;
        if (! /^[0-9]{1,3}$/.test(resource.order) && resource.order) valid = false;
        if (! /^[0-9]{1,1000}$/.test(resource.discount) && resource.discount) valid = false;
        if (! /[0-9]/.test(resource.simple)) valid = false;
        if (! /[0-9]/.test(resource.rare)) valid = false;
        if (! /[0-9]/.test(resource.excellent)) valid = false;
        if (!resource.imgUrl) valid = false;
        console.log(" valid ", valid);
        return valid;
    }

    upload(resource, resourceProp) {
        const formData: any = new FormData();
        const files: Array<File> = this.filesToUpload;

        if (!files[0] || !files[0].name.match(/.(jpg|jpeg|png|gif)$/i)) {
            console.log(" file is not image ", files[0] );
            return;
        }

        formData.append("uploads[]", files[0], files[0]['name']);

        this.http.post( this.url + '/upload', formData)
            .map(files => files.json())
            .subscribe(files => {
                console.log('files', files);
                resource[resourceProp] = "http://localhost:3000/uploads/" + files[0].filename;
                console.log( resource[resourceProp] );
            });
    }

    fileChangeEvent(fileInput: any, resource: any, resourceProp: string = 'imgUrl' ) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        let photo = fileInput.target.files[0]['name'];
        console.log(" => ", photo);
        this.upload(resource, resourceProp);
    }

}
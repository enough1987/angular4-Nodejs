import { Injectable } from '@angular/core';


@Injectable()
export class SettingService {

    private static instance: SettingService; // instance of Singleton 
    static originPaypal: string;

    constructor(){
        if ( SettingService.instance ) {
            return SettingService.instance;
        }
        console.log( " LOCATION : ", window.location );
        if ( window.location.hostname == "localhost" ) {
            SettingService.originPaypal = window.location.protocol + "//" + window.location.hostname + ':3000';            
        } else {
            SettingService.originPaypal = window.location.protocol + '://52.58.162.133:3000';
        }
    }

}
import { Injectable } from "@angular/core";
@Injectable()
export class languageHelper {
    constructor() {

    }

    GetCurrentLang() {
        debugger;
        //return 
        return localStorage.getItem('culture');
    }
}
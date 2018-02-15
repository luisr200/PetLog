import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { Pet } from "./pet.model";


@Injectable()

export class PetService{
private baseURL = 'https://62lf2x0tbe.execute-api.us-east-2.amazonaws.com/test/pet?email=luisr200@msn.com'


    constructor(private http: Http){}
    
    getPets(){
        return this.http
        .get(this.baseURL)
        .map((response: Response) => {
                return <Pet[]>response.json();
        })
        .catch(this.handleError)
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
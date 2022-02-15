import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ItemCafeManha } from "../model/item-cafe-manha";

@Injectable({ providedIn: 'root' })

export class ItemCafeManhaService {

    apiURL: string = 'https://cafedamanha-api.herokuapp.com/itemcafemanha'
    constructor(
        private http: HttpClient
    ) { }

    visualizar(): Observable<ItemCafeManha[]> {
        return this.http.get<ItemCafeManha[]>(this.apiURL);
    }

}
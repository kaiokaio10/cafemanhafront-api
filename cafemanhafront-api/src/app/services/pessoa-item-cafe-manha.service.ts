import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pessoa } from "../model/pessoa";
import { Observable } from "rxjs";
import { ItemCafeManha } from "../model/item-cafe-manha";

@Injectable({ providedIn: 'root' })

export class PessoaItemCafeManhaService {

    apiURL: string = 'https://cafedamanha-api.herokuapp.com/pessoaitemcafemanha'
    constructor(
        private http: HttpClient
    ) { }
   
    pesquisarItemCafeManhaPorIdPessoa(idPessoa: number): Observable<ItemCafeManha[]> {
        return this.http.get<ItemCafeManha[]>(`${this.apiURL}/${idPessoa}`);
    }


}
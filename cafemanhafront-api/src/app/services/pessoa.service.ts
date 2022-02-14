import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pessoa } from "../model/pessoa";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class PessoaService {

    apiURL: string = 'https://cafedamanha-api.herokuapp.com/pessoa'
    constructor(
        private http: HttpClient
    ) { }

    enviar(dto: Pessoa): Promise<any> {
        return this.http.post(this.apiURL, dto)
            .toPromise()
            .then(Response => console.log(Response));

    }

    alterar(dto: Pessoa): Observable<Pessoa> {
        return this.http.put<Pessoa>(`${this.apiURL}`, dto);
    }

    consultarPorId(id: number): Observable<Pessoa> {
        return this.http.get<Pessoa>(`${this.apiURL}/${id}`);
    }

    salvar(dto: Pessoa): Observable<Pessoa> {
        return this.http.post<Pessoa>(this.apiURL, dto);
    }


    excluir(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiURL}/${id}`);
    }

    pesquisar(dto: Pessoa): Observable<Pessoa[]> {
        return this.http.post<Pessoa[]>(`${this.apiURL}/pesquisar`, dto);
    }

    visualizar(lista: Pessoa[]): Promise<any> {
        return this.http.get(this.apiURL)
            .toPromise()
            .then(Response => console.log(Response));

    }
    visualizarListaCompleta(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(`${this.apiURL}/listartodos`);
    }

}
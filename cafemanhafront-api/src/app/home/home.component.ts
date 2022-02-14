import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Pessoa } from '../model/pessoa';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listaPessoa: Pessoa[] = [];

  constructor(
    private service: PessoaService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.listaPessoaCompleta();
  }

  listaPessoaCompleta() {
    this.service.visualizarListaCompleta().subscribe(retorno => {
      this.listaPessoa = retorno;
    }, () => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao realizar consulta' });
    });
  }
  

}

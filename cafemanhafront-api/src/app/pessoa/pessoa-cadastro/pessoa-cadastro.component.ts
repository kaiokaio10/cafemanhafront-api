import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Pessoa } from 'src/app/model/pessoa';
import { HttpErrorResponse } from '@angular/common/http';
import { PessoaService } from 'src/app/services/pessoa.service';
import { ItemCafeManhaService } from 'src/app/services/item-cafe-manha.service';
import { ItemCafeManha } from 'src/app/model/item-cafe-manha';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  public dto: Pessoa = new Pessoa();
  public edicao: boolean = false;
  public dtoItem: ItemCafeManha = new ItemCafeManha();
  public listaItemCafeManha: ItemCafeManha[] = [];


  constructor(
    private messageService: MessageService,
    private router: Router,
    private service: PessoaService,
    private serviceItemCafeManha: ItemCafeManhaService,
    private activatedRoute: ActivatedRoute,

  ) {

  }

  ngOnInit(): void {
    this.recuperarInfRota();
    this.listarItemCafeManha();
  }

  validarForm() {
    if (!this.dto.nome) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Nome  não preenchido.' });
      return false;
    }
    if (!this.dto.cpf) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'CPF  não preenchido.' });
      return false;
    }
    if (this.dto.listaSelecionado.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Nenhuma opção para o café da manha selecionada' });
      return false;
    }

    return true;
  }

  salvar() {
    if (!this.validarForm()) {
      return;
    }
    this.service.salvar(this.dto).subscribe(retorno => {
      this.dto = retorno;
      this.messageService.add({ severity: 'success', summary: 'Atenção', detail: 'Participante salvo com sucesso' });
      this.limpar();
    }, (erro: HttpErrorResponse) => {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: erro.error });
    });
  }

  limpar() {
    if (this.edicao) {
      this.consultarPorId(this.dto.id);
    } else {
      this.dto = new Pessoa();
    }

  }

  consultarPorId(id: number) {
    this.service.consultarPorId(id).subscribe(retorno => {
      this.dto = retorno;
      console.log(this.dto)
    }, () => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao realizar consulta' });
    });
  }


  alterar() {
    if (!this.validarForm()) {
      return;
    }
    this.service.alterar(this.dto).subscribe(retorno => {
      this.consultarPorId(retorno.id)
      this.messageService.add({ severity: 'success', summary: 'Atenção', detail: 'Participante alterado com sucesso' })
    }, (erro: HttpErrorResponse) => {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: erro.error });
    });


  }

  save() {
    return this.edicao ? this.alterar() : this.salvar();
  }

  voltar() {
    this.router.navigate(['/participante/listagem']);
  }

  recuperarInfRota() {
    this.edicao = false;

    this.activatedRoute.params.subscribe(params => {
      if (!!params['id']) {
        this.consultarPorId(params['id']);
        this.edicao = true;
      }
    });
  }

  listarItemCafeManha() {
    this.serviceItemCafeManha.visualizar().subscribe(retorno => {
      this.listaItemCafeManha = retorno;
    }, () => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao realizar consulta' });
    });
  }



}

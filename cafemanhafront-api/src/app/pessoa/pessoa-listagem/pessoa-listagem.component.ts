import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Pessoa } from 'src/app/model/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
    selector: 'app-pessoa-listagem',
    templateUrl: './pessoa-listagem.component.html',
    styleUrls: ['./pessoa-listagem.component.css']
})
export class PessoaListagemComponent implements OnInit {

    public listaPessoa: Pessoa[] = [];
    public display: boolean = false;
    public dto: Pessoa;
    public exibir: boolean = false;

    constructor(
        private router: Router,
        private service: PessoaService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
    ) { }

    ngOnInit() {
        this.dto = new Pessoa();
    }

    voltar() {
        this.router.navigate(['/cadastro']);
    }

    pesquisar() {
        this.service.pesquisar(this.dto).subscribe(retorno => {
            this.listaPessoa = retorno;
            this.exibir = true;
        }, (erro: HttpErrorResponse) => {
            this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: erro.error });
        });

    }

    excluir(id: number) {
        this.service.excluir(id).subscribe(retorno => {
            this.messageService.add({ severity: 'info', summary: 'Excluído', detail: 'com sucesso' });
        }, (erro: HttpErrorResponse) => {
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao excluir pessoa' });
        });
    }

    confirmar(id: number, event: Event) {
        this.confirmationService.confirm({
            target: event.target,
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            message: 'Confirma a exclusão da pessoa?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.excluir(id);
                this.limpar();
            },
            reject: () => {
                this.messageService.add({ severity: 'info', summary: 'Excluída', detail: 'com sucesso' });
            }
        });
    }

    limpar() {
        this.listaPessoa = [];
        this.dto = new Pessoa();
        this.exibir = false;
    }

    openNovo() {
        this.router.navigate(['/participante/cadastro']);
    }

    openEditar(id: number) {
        this.router.navigate(['/participante/cadastro', { id: id }]);
    }


}
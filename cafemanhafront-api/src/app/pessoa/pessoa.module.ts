import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { TableModule } from 'primeng/table';
import { PessoaCadastroComponent } from "./pessoa-cadastro/pessoa-cadastro.component";
import { PessoaListagemComponent } from "./pessoa-listagem/pessoa-listagem.component";



@NgModule({
    declarations: [
      PessoaCadastroComponent,
      PessoaListagemComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      FormsModule,
      ButtonModule,
      TableModule,
    ],
  })
  export class PessoaModule { }
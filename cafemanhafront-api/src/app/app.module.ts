import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { PessoaCadastroComponent } from './pessoa/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaListagemComponent } from './pessoa/pessoa-listagem/pessoa-listagem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {MessageModule} from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {DialogModule} from 'primeng/dialog';
import {ListboxModule} from 'primeng/listbox';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    PessoaCadastroComponent,
    PessoaListagemComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MegaMenuModule,
    MenuModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    MessageModule,
    BrowserAnimationsModule,
    InputMaskModule,
    InputTextModule,
    ReactiveFormsModule,
    TableModule,
    ConfirmPopupModule,
    DialogModule,
    ListboxModule
    
    
  ],
  providers: [  MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

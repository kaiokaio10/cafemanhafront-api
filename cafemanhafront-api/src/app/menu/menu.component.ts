import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MegaMenuItem[];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home', icon: 'pi pi-fw pi-home',
        items: [
          [
            {
              items: [{ label: 'Home', url: '/#/' }]
            },
          ]
        ]
      },
      {
        label: 'Participante', icon: 'pi pi-fw pi-users',
        items: [
          [
            {
              items: [{ label: 'Pesquisar', url: '/#/listagem' }, { label: 'Cadastrar', url: '/#/cadastro' }]
            },
          ],
        ]
      }
    ]
  }
}


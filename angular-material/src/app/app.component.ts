import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from './models/menu-item';
import { MenuCategory } from './models/menu-category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  sideBarOpened: boolean = true;
  mainMenu: MenuCategory[] = [];

  ngOnInit(): void {
    this.mainMenu.push({
      name: "Pedidos",
      icon: "shopping-cart",
      items: [
        { name: "Adicionar Pedido", icon: "add_box", link: "#" },
        { name: "Sumário de Pedidos", icon: "summarize", link: "#" },
        { name: "Pedidos Pendentes", icon: "pending_actions", link: "#" }]
    });

    this.mainMenu.push({
      name: "Gerenciamento",
      icon: "save",
      items: [
        { name: "Produtos", icon: "barcode_reader", link: "#" },
        { name: "Clientes", icon: "shopping_cart", link: "#" },
        { name: "Fornecedores", icon: "factory", link: "#" }]
    });

    this.mainMenu.push({
      name: "Relatórios",
      icon: "summarize",
      items: [
        { name: "Faturamento", icon: "payments", link: "#" },
        { name: "Ranking de Clientes", icon: "stars", link: "#" }]
    });
  }

  toggleMenu(): void {
    this.sideBarOpened = !this.sideBarOpened;
  }
}

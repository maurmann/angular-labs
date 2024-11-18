import { MenuItem } from "./menu-item";

export class MenuCategory {
  icon: string;
  name: string;
  items: MenuItem[];

  constructor(icon: string, name: string, items: MenuItem[]) {
    this.icon = icon;
    this.name = name;
    this.items = items;
  }
}

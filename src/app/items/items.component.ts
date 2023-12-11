import { Component } from '@angular/core';
import { ItemModel } from './items.model';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  products!: ItemModel[];

  cols!: Column[];

  constructor() {}

  ngOnInit() {
  

      this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' }
      ];
  }
}

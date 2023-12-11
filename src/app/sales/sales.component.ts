import { Component } from '@angular/core';
import { SalesModel } from './sales.model';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {
  products!: SalesModel[];

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


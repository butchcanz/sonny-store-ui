import { Component } from '@angular/core';
import { ItemModel } from './items.model';
import { MessageService } from 'primeng/api';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
  providers: [MessageService]
})
export class ItemsComponent {
  products!: ItemModel[];

  cols!: Column[];
  visible: boolean = false;
  
  constructor ( private messageService: MessageService,
    ) {}

  showDialog() {
    this.visible = true;
}
show() {
  this.messageService.add({ severity: 'success', summary: 'Added Successfully', detail: '' });
}
  ngOnInit() {


  this.products =  [
    { id: "001", itemnumber: 1, itemname: "Growers", price: 16, quantity: 20 }
  ]

      this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' }
      ];
  }
}

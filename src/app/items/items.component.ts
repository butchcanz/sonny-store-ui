import { Component } from '@angular/core';
import { ItemModel } from './items.model';
import { MessageService } from 'primeng/api';
import { ItemServiceComponent } from './itemservice.component';

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
  sourceproducts!: ItemModel[];
  targetproducts!: ItemModel[];

  cols!: Column[];
  visible: boolean = false;
  
  constructor ( private messageService: MessageService,
                private carService: ItemServiceComponent,
    ) {}

  showDialog() {
    this.visible = true;
}
show() {
  this.messageService.add({ severity: 'success', summary: 'Added Successfully', detail: '' });
}
  ngOnInit() {
                this.carService.getProductsSmall().then(products => {
                this.sourceproducts = products;
            });
                this.targetproducts = [];

    
    

  this.sourceproducts =  [
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

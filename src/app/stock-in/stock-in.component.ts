import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-stock-in',
  templateUrl: './stock-in.component.html',
  styleUrl: './stock-in.component.scss'
})
export class StockInComponent {
  items: MenuItem[] | undefined;

  

  ngOnInit() {
    this.items = [
 
    ];
  }
}
  



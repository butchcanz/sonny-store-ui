import { Injectable } from '@angular/core';
    
@Injectable()
export class ItemServiceComponent {
    getProductsData() {
        return [
            {
                id: '1',
                itemnumber: 1,
                itemname: 'Growers',
                price: 16,
                quantity: 24,
            },
            {
                id: '2',
                itemnumber: 2,
                itemname: 'Letchon Baboy',
                price: 1000,
                quantity: 24,
            },
            {
                id: '3',
                itemnumber: 3,
                itemname: 'Manok',
                price: 500,
                quantity: 24,
            },
        ]
    }
            getProductsWithOrdersData() {
                return [
                    {
                        id: '1',
                        itemnumber: 1,
                        itemname: 'Growers',
                        price: 16,
                        quantity: 24,
                        orders: [
                            {
                                id: '1-1',
                                itemnumber: 1,
                                date: '2020-09-13',
                                amount: 16,
                                quantity: 1,
                                customer: 'Noah',
                                status: 'PENDING'
                            },
                        ]
                    }
                ]
             }
               
        
            getProductsMini() {
                return Promise.resolve(this.getProductsData().slice(0, 5));
            }
        
            getProductsSmall() {
                return Promise.resolve(this.getProductsData().slice(0, 10));
            }
        
            getProducts() {
                return Promise.resolve(this.getProductsData());
            }
        
            getProductsWithOrdersSmall() {
                return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
            }
        
            getProductsWithOrders() {
                return Promise.resolve(this.getProductsWithOrdersData());
            }
        };
import { Component, EventEmitter, Output } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products: any;
  cartItems: any[] = [];

  constructor(private cartService: CartserviceService) {}

  ngOnInit(): void {
    this.products = [
      {
        id: 101,
        name: 'iphone 14 Pro',
        description: 'EMI starts at ₹6,717. No Cost EMI available EMI',
        price: 90000,
        imagePath:
          'https://m.media-amazon.com/images/I/71ZDY57yTQL._SX522_.jpg',
      },
      {
        id: 102,
        name: 'Google Pixel 7 Pro 5G',
        description: 'EMI starts at ₹4,360. No Cost EMI available EMI',
        price: 90.8,
        imagePath:
          'https://m.media-amazon.com/images/I/712JkPUUlRL._SL1500_.jpg',
      },
      {
        id: 103,
        name: 'Samsung Galaxy S22 Ultra',
        description: 'EMI starts at ₹4,360. No Cost EMI available EMI',
        price: 109999,
        imagePath:
          'https://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg',
      },
      {
        id: 104,
        name: 'OnePlus 11 5G',
        description: 'No cost emi from 1,499/- per month',
        price: 56999,
        imagePath:
          'https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg',
      },
    ];
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems);
  }
}

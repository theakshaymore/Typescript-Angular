import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartserviceService {
  private cartItems: any[] = [];

  constructor() {}

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  getCartItems() {
    return this.cartItems;
  }
}

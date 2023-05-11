import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartserviceService) {}

  showCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }
}

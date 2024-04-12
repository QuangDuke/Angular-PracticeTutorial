import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  // store the array of current products in the cart
  items: Product[] = [];
  // add items to cart
  addToCart(product: Product) {
    this.items.push(product);
  }
  // return the cart items
  getItems() {
    return this.items;
  }
  // clear the cart items
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}

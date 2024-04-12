import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    // First get the product id from the current route.
    const routeParameters = this.route.snapshot.paramMap;
    const productsIdFromRoute = Number(routeParameters.get('productId'));
    // Next, find the right product within products array that correspond the with the id found in the route
    this.product = products.find(
      (product) => product.id === productsIdFromRoute
    );
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Product has been added to your cart!');
  }
}

import { Component } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'bot-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: IProduct

  constructor() {
    this.product = {
      id: 1,
      description:
        "A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
      name: "Large Cyclops",
      imageName: "head-big-eye.png",
      category: "Heads",
      price: 1220.5,
      discount: 0.2,
    }
  }

  getImagePath(product: IProduct): string {
    return `/images/robot-parts/${product.imageName}`;
  }
}

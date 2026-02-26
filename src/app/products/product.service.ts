import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products-2';
  selectedProduct = signal<Product | undefined>(undefined);
  productResource = httpResource<Product[]>(() => this.productsUrl, { defaultValue: [] });
}

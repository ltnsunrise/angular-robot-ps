import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products-2';

  productResource = httpResource<Product[]>(() => this.productsUrl, { defaultValue: [] });
}

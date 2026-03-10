import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from './product';
import { rxResource } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products-2';
  private http = inject(HttpClient);

  selectedProduct = signal<Product | undefined>(undefined);
  // productResource = httpResource<Product[]>(() => this.productsUrl, { defaultValue: [] });
  productResource = rxResource({
    stream: () => this.http.get<Product[]>(this.productsUrl).pipe(
      map(items => items.sort((a, b) => a.productName > b.productName ? 1 : -1))
    ),
    defaultValue: []
  });
}

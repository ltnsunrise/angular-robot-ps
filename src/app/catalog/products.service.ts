import { inject, Injectable } from '@angular/core';
import { Product } from '@shared/product.model';
import { productsArray } from './products-data';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private http = inject(HttpClient)

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products')
  }
}

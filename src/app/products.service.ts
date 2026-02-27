import { computed, Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { httpResource, HttpResourceRef } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  resource: HttpResourceRef<IProduct[] | undefined> = httpResource(() => '/api/products', {
    defaultValue: []
  })


}

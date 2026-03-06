import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '@shared/product.model';
import { IProductsService } from '@shared/products-service.interface';
import { Observable, of } from 'rxjs';
import { engineers } from './squad-catalog/engineers';

@Injectable({
  providedIn: 'root'
})
export class EngineersService implements IProductsService {
  private http = inject(HttpClient)

  getProducts(): Observable<Product[]> {
    return of(engineers)
  }
}
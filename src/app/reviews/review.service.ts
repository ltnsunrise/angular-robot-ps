import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Review } from './review';
import { ProductService } from '../products/product.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private productService = inject(ProductService)
  private reviewsUrl = 'api/reviews';
  private http = inject(HttpClient);

  // reviewResource = httpResource<Review[]>(() => {
  //   const p = this.productService.selectedProduct()
  //   if (!p) {
  //     return undefined;
  //   }
  //   return `${this.reviewsUrl}/${p.id}`
  // }, { defaultValue: [] })

  reviewResource = rxResource({
    params: this.productService.selectedProduct,
    stream: (p) => {
      return this.http.get<Review[]>(`${this.reviewsUrl}/${p.params?.id}`)
    },
    defaultValue: []
  })
}

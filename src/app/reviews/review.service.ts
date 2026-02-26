import { httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Review } from './review';
import { ProductService } from '../products/product.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private productService = inject(ProductService)
  private reviewsUrl = 'api/reviews';

  reviewResource = httpResource<Review[]>(() => {
    const p = this.productService.selectedProduct()
    if (!p) {
      return undefined;
    }
    return `${this.reviewsUrl}/${p.id}`
  }, { defaultValue: [] })


}

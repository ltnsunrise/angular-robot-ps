import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
  name: 'groupById'
})
export class GroupByIdPipe implements PipeTransform {

  transform(products: IProduct[] | undefined | null) {
    if (!products || products.length === 0) {
      return [];
    }
    const map = new Map<number, IProduct & { quantity: number }>();

    for (const product of products) {
      if (map.has(product.id)) {
        map.get(product.id)!.quantity++;
      } else {
        map.set(product.id, { ...product, quantity: 1 });
      }
    }

    return Array.from(map.values());
  }

}

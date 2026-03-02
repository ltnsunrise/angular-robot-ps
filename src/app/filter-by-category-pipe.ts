import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
  name: 'filterByCategoryPipe',
  // pure: false // avoid this, it will re-run the pipe every change detection cycle
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(products: IProduct[], category: string | null): IProduct[] {
    if (!category) {
      return products;
    }
    return products.filter((p) => p.category === category);
  }

}

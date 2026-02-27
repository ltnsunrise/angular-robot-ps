import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPartType'
})
export class CategoryPartTypePipe implements PipeTransform {

  transform(category: string, upperCase: boolean = false): string {
    if (upperCase) {
      return category[0].toUpperCase() + category.slice(1, -1);
    }
    return category.slice(0, -1);
  }

}

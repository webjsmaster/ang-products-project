import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../entity/product';

@Pipe({
  name: 'filterProducts',
  standalone: true,
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: Product[], search: string): Product[] {
    if (!search.length) return products;
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  }

}

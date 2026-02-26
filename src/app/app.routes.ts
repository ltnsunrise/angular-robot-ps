import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { ProductSelection } from './products/product-selection/product-selection';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'products',
    component: ProductSelection,
  },
];

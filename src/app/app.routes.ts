import { Routes } from '@angular/router';
import { CatalogComponent } from '@catalog/catalog.component';
import { SearchComponent } from '@catalog/search/search.component';
import { CartComponent } from '@shared/cart/cart.component';
import { SquadCatalogComponent } from './squad/squad-catalog/squad-catalog.component';
import { squadRoutes } from './squad/squad.routes';

export const routes: Routes = [
  { path: 'catalog', component: CatalogComponent, title: "Catalog - Joe's Robot Shop" },
  { path: 'search', component: SearchComponent, title: "Search - Joe's Robot Shop" },
  { path: 'cart', component: CartComponent, title: "Cart - Joe's Robot Shop" },
  {
    path: 'squad',
    children: [
      ...squadRoutes,
    ]
  },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
];


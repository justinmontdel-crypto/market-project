import { Routes } from '@angular/router';
import { AllProducts } from './pages/all-products/all-products';

export const routes: Routes = [
  {
    path: '',
    component: AllProducts
  },
  {
    path: '**',
    redirectTo: ''
  },

];

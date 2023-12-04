import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FavoriteProductsComponent } from './favorite-products/favorite-products.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'favorite',
    component: FavoriteProductsComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'user/register',
    component: RegisterFormComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },

  {
    path: 'cart',
    component: CartComponent,
  },
  { path: 'admin', component: DashboardComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

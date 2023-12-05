import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { reducers } from '../store/store';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FavoriteProductsComponent } from './favorite-products/favorite-products.component';
import { UsersEffects } from 'src/store/effects/users.effects';
import { ProductsEffects } from '../store/effects/products.effects';
import { ProductDetailEffects } from 'src/store/effects/productDetail.effects';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CartComponent } from './cart/cart.component';
import { SortFormComponent } from './sort-form/sort-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    HomeComponent,
    NavbarComponent,
    RegisterFormComponent,
    SearchFormComponent,
    FavoriteProductsComponent,
    UserProfileComponent,
    UserComponent,
    UserLoginComponent,
    CartComponent,
    SortFormComponent,
    DashboardComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([
      ProductsEffects,
      ProductDetailEffects,
      UsersEffects,
    ]), // Register effects here
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

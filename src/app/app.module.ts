import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsComponent } from './products/products.component';
import { ProductsEffects } from '../store/effects/products.effects';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from '../store/store';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailEffects } from 'src/store/effects/productDetail.effects';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FavoriteProductsComponent } from './favorite-products/favorite-products.component';
import { UsersEffects } from 'src/store/effects/user.effects';

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

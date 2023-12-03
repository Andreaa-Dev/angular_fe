import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../../models/product.model';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  constructor(private http: HttpClient) {}

  // Fetch product by id
  getProductDetailById(productId: string): Observable<Product> {
    const apiUrl = `${environment.apiUrl}/${productId}`; // Replace with your API endpoint
    return this.http.get<Product>(apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../shared/category';
import { map, catchError } from 'rxjs/operators';
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = "assets";
  
  constructor(private httpClient : HttpClient) { }

  getCategories() : Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseUrl}/categories.json`)
      .pipe(
        catchError(this.handleError)
      );
  }


  getProducts(categoryId : number) : Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}/products.json`)
      .pipe(
        map(products => {
          let results = products.filter((product : Product) => product.categoryId == categoryId);
          return results;
        }),
        catchError(this.handleError)
      )
  }

  private handleError(error : any){
    console.error('server error:', error);
    if(error.error instanceof Error){
      const errorMessage = error.error.message;
      return Observable.throw(errorMessage);
    }

    return Observable.throw(error || 'Server error');
  }
}

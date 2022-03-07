import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable, retry, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsAPIService {

  private httpOptions={};
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // , 'Authorization': 'Access-token'
      })
    }
   }

  getAllProducts(): Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/products`);
  }

  getProductsByCatID(catID: number): Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/products?categoryID=${catID}`);
  }

  getProductByID(prdID: number): Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.APIBaseURL}/products/${prdID}`);
  }

  addProduct(newPrd:IProduct): Observable<IProduct>
  {
    return this.httpClient.post <IProduct>(`${environment.APIBaseURL}/products`
                                        , JSON.stringify(newPrd)
                                        , this.httpOptions)
                          // .pipe(
                          //   retry(3),
                          //   catchError((err)=>{
                          //     return throwError(()=>{
                          //       return new Error('Error occured, plz try again')
                          //     });
                          //   })
                          // );
  }
}

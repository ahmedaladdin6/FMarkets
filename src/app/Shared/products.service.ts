import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getAllProducts(){
    return this.http.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
}

getProduct(id){
  return this.http.get(`https://5bcce576cf2e850013874767.mockapi.io/task/categories/${id}`);
}
}

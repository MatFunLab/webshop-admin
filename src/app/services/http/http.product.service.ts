import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { Category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class HttpProductService {

  category: Category;
  constructor(private http: HttpClient) { }

  
uploadProduct(product: Product) {
  const uploadData = new FormData();
 
 
  let price = product.price.toString();
   let categoryId = product.category.id.toString(); 
  
   uploadData.append('file', product.file);
   uploadData.append('name', product.name);
   uploadData.append('price', price);
   uploadData.append('desc', product.desc);
   uploadData.append('categoryId', categoryId); 
 
  return this.http.post(`http://localhost:3000/admin/addProduct`, uploadData);
}
  
getProducts() {
  return this.http.get(`http://localhost:3000/admin/products`);
}

deleteProduct(id: number) {
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: {
      id: id
    }
  }
  return this.http.delete(`http://localhost:3000/admin/product`, options );
}

editProduct(product: Product) {
  const uploadData = new FormData();
  let price = product.price.toString();
  let id = product.id.toString();
  uploadData.append('id', id);
   uploadData.append('file', product.file);
   uploadData.append('name', product.name);
   uploadData.append('price', price);
   uploadData.append('desc', product.desc);
  return this.http.patch(`http://localhost:3000/admin/product`, uploadData );
}

getProductSalesInfo() {
    return this.http.get(`http://localhost:3000/admin/productSalesInfo`);
  }
}

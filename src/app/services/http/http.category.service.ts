import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class HttpCategoryService {

  constructor(private http: HttpClient) { }

  
uploadCategory(categoryName: string) {
   
  const uploadData = new FormData();

   uploadData.append('name', categoryName);
  
 
  return this.http.post(`http://localhost:3000/admin/addCategory`, uploadData);
}

getCategories() {       
    return this.http.get(`http://localhost:3000/shop/categories`);
}
}
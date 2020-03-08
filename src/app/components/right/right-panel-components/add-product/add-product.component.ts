import { Component, OnInit } from '@angular/core';
import { HttpProductService } from 'src/app/services/http/http.product.service';
import { Product } from 'src/app/models/product.model';
import { Category } from 'src/app/models/category.model';
import { HttpCategoryService } from 'src/app/services/http/http.category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  selectedFile: File;
  product: Product;
  categories: Array<Category> = new Array<Category>();
  unsubGetCategories: Subscription;
  isHidden: boolean = true;
  isExistingChoosed: boolean;
  selectedCategory: Category;
  

  constructor(private httpProductService: HttpProductService,
              private httpCategoryService: HttpCategoryService
              ) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.unsubGetCategories = this.httpCategoryService.getCategories().subscribe((categories: Array<Category>) => {
      console.log(categories);
      this.categories = categories;
    }, (err) => {
      console.log(err);
    });
  }
  

  onFileChanged(event) {
    this.product = new Product();
    this.product.file = event.target.files[0];
   
  }

  
  onUploadProduct(product) {
    
    const file = this.product.file;
    this.product = new Product();
    this.product.category = new Category();

    if(!this.selectedCategory) {
      this.httpCategoryService.uploadCategory(product.value.category).subscribe((savedCategory: Category) => {
        if(savedCategory) {
          this.product.category = savedCategory;
          this.product.name = product.value.name;
          this.product.price = product.value.price;
          this.product.desc = product.value.desc;
          this.product.file = file;
        
          this.httpProductService.uploadProduct(this.product).subscribe((savedProduct) => {
            console.log(savedProduct);
          }); 
        }
      }); 
    } else {
      this.product.category = this.selectedCategory;
      this.product.name = product.value.name;
      this.product.price = product.value.price;
      this.product.desc = product.value.desc;
      this.product.file = file;
    
     
        this.httpProductService.uploadProduct(this.product).subscribe((savedProduct) => {
          console.log(savedProduct);
        }); 
      
      
}

   
  }

  

  toggleCategory() {
    if(this.isHidden !== false) {
      this.isHidden = false;
    } else {
      this.isHidden = true;
    }
  }

  ngOnDestroy() {
    this.unsubGetCategories.unsubscribe();
  }

}

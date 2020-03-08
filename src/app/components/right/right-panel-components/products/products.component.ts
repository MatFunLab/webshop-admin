import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { HttpProductService } from 'src/app/services/http/http.product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;
  baseImageUrl: string = 'http://localhost:3000/';

  //to show 3 images per row
  regularDistribution = 100 / 6.2;
  xSmallDistribution = 100 / 2.2;
  smallDistribution = 100 / 4.2;

  isEdit: boolean = false;
  selectedProduct: Product;
  editedProduct: Product;

  constructor(private httpProductService: HttpProductService) { }

  ngOnInit() {
    this.httpProductService.getProducts().subscribe((products: Array<Product>) => {
      this.products = products;
      console.log(products);
    });
  }

  onDelete(product: Product) {
    console.log(product);
    this.httpProductService.deleteProduct(product.id).subscribe((product: Product) => {
      if(product) {
        this.ngOnInit();
      }
      console.log('products deleted ' + product);
    });
  }
  onEdit(product: Product) {
    console.log(product);
    this.selectedProduct = product;
    this.isEdit = true;
  }

  onFileEdited(event) {
    this.editedProduct = new Product();
    this.editedProduct.file = event.target.files[0];
  }

  onCancelEditProduct(product: Product) {
    this.isEdit = false;
    this.selectedProduct = null;
 }  
 onUploadEditProduct(product) {
    this.editedProduct.id = this.selectedProduct.id;
    this.editedProduct.name = product.value.name;
    this.editedProduct.price = product.value.price;
    this.editedProduct.desc = product.value.desc;
     this.httpProductService.editProduct(this.editedProduct).subscribe((data) => {
       if(data) {
         this.ngOnInit();
       }
      console.log(data);
    }); 
  }

}

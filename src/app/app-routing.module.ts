import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/right/right-panel-components/add-product/add-product.component';
import { ProductsComponent } from './components/right/right-panel-components/products/products.component';
import { DashboardComponent } from './components/right/right-panel-components/dashboard/dashboard.component';

const routes: Routes = [
 
  {path: 'admin/addProduct', component: AddProductComponent},
  {path: 'admin/getProducts', component: ProductsComponent},
  {path: 'admin/dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorInterceptor } from './services/http/http-error.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPanelComponent } from './components/left/left-panel/left-panel.component';
import { RightPanelComponent } from './components/right/right-panel/right-panel.component';
import { DropdownsComponent } from './components/left/left-panel-components/dropdowns/dropdowns.component';
import { HeaderComponent } from './components/right/right-panel-components/header/header.component';
import { MainComponent } from './components/right/right-panel-components/main/main.component';
import { DashboardComponent } from './components/right/right-panel-components/dashboard/dashboard.component';
import { AddProductComponent } from './components/right/right-panel-components/add-product/add-product.component';
import { ProductsComponent } from './components/right/right-panel-components/products/products.component';
import { TrafficPanelComponent } from './components/right/right-panel-components/dashboard/traffic-panel/traffic-panel.component';
import { CustomerRegionPanelComponent } from './components/right/right-panel-components/dashboard/customer-region-panel/customer-region-panel.component';

import { HttpProductService } from './services/http/http.product.service';
import { HttpCategoryService } from './services/http/http.category.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    RightPanelComponent,
    DropdownsComponent,
    HeaderComponent,
    MainComponent,
    DashboardComponent,
    AddProductComponent,
    ProductsComponent,
    TrafficPanelComponent,
    CustomerRegionPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }, HttpProductService, HttpCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

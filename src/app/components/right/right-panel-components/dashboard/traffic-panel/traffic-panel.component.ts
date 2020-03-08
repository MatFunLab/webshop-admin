import { Component, OnInit, ɵConsole } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { HttpProductService } from 'src/app/services/http/http.product.service';
import { Product } from 'src/app/models/product.model';
import { OrderItems } from 'src/app/models/order-items.model';

@Component({
  selector: 'app-traffic-panel',
  templateUrl: './traffic-panel.component.html',
  styleUrls: ['./traffic-panel.component.scss']
})
export class TrafficPanelComponent implements OnInit {

  unsubscribeTimer: Subscription;
  topProducts: Array<OrderItems> = new Array<OrderItems>();
 
  isTopSelledError: boolean = false;

  constructor(private httpProductService: HttpProductService) { }

  ngOnInit() {
    //ispisuje brojeve svake 3sek (vezano za cron iz backenda )
    
     const numbers = timer(3000, 12000); //to call every 10 mins chnge second param to 60 000
    this.unsubscribeTimer = numbers.subscribe(x => {
      this.httpProductService.getProductSalesInfo().subscribe((topSelledProduct: Array<OrderItems>) => {
        console.log(topSelledProduct)
        if(topSelledProduct === null) {
          this.isTopSelledError = true;
          console.log(this.isTopSelledError)
       
        }
       this.topProducts = topSelledProduct;

        
      });
    }); 
  }

  ngOnDestroy() {
    this.unsubscribeTimer.unsubscribe();
  }
  
}

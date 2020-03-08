import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  addProduct() {
    this.router.navigate(['/admin', 'addProduct']); 
  }

  getProducts() {
    this.router.navigate(['/admin', 'getProducts']);
  }

  getDashboard() {
    this.router.navigate(['/admin', 'dashboard']);
  }
}

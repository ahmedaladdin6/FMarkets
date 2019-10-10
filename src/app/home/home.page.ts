import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Shared/products.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  products: any;
  images:string[]=["../../assets/images/meal1.jpg","../../assets/images/meal2.jpg","../../assets/images/meal3.jpg"];
  
  constructor( private productsService:ProductsService,private router: Router) {}

ngOnInit() {
 this.productsService.getAllProducts().subscribe((response) => {
   this.products = response;
});

}

showProduct(id){
  this.router.navigate(['/product', id]);
}
}

import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../Shared/products.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  iconName= 'add-circle';
  id: number;
  categoriesDetails: any={};
  productsOfCategories:any=[];
  constructor(private productsService: ProductsService,
    private route: ActivatedRoute,
    private router:Router) { }
  
  ngOnInit() {
  
    this.id = this.route.snapshot.params['id'];
    this.productsService.getProduct(this.id)
    .subscribe(result=>{
          this.categoriesDetails = result;
          this.categoriesDetails.products
          .map(products=>{
               this.productsOfCategories.push(products);
               console.log('map',this.productsOfCategories)
          })
    })
  }
 
  returnBack(){
    this.router.navigate(['/home']);
  }
  chooseProducts(id) { 
    const valueFilterd =id;
    const result = this.productsOfCategories.filter(e=>{
      return e.id == valueFilterd;
    })
    alert(' " '+ result[0].name+' " products is selected')

}
  

}

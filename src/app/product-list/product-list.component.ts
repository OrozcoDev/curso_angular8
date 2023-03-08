import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  products: Product[]=[
    {
      id: 1,
      title:'desayuno 1',
      price: 200,
      text: 'super desayunodadasdasdasdasd',
      image: 'assets/images/img1.jpg'
    },

    {
      id: 2,
      title:'desayuno 2',
      price: 200,
      text: 'super desayunoasdasdasdas',
      image: 'assets/images/img2.jpg'
    },

    {
      id:3,
      title:'desayuno 3',
      price: 200,
      text: 'super desayunoasdasddasda',
      image: 'assets/images/img3.jpg'
    },
  ];

  constructor(){}

  ngOnInit(): void {                 
  }

  onClickedProduct(id: number){
    console.log('clicked',id);
  }
}

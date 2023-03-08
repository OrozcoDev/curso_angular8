import { NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product,} from './../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product!: Product;
  @Output() clickedProduct = new EventEmitter<number>();

  today = new Date();

  //metodo para ver detalle           
  viewDetail(){
    console.log('viewDetail', this.product.title);
    this.clickedProduct.emit(this.product.id);
  }
}
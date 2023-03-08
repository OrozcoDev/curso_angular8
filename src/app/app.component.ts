import { Component } from '@angular/core';

import{ Product } from './models/product.model'

export interface User{
  name: string;
  age:number;
  isSingle:boolean;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hola a esta primera clase';

  nombres= ['nirvana' , 'los pricioneros'];


  users: User[]=[
    {
      name:'nicolas',
      age: 30,
      isSingle:false,
      avatar:'assets/images/img1.jpg',
    },
    {
      name:'julian',
      age: 26,
      isSingle:true,
      avatar:'assets/images/img1.jpg',
    }
  ];

  newnombre='';

  addNombre(){
    this.nombres.push(this.newnombre);
    this.newnombre = '';
  }

  empry(){
    this.nombres = [];
  }

  eliminarItem(index: number){
    this.nombres.splice(index, 1);
  }

  actualizarItem(index:number){
    this.nombres[index]='se cambio';
  }

}


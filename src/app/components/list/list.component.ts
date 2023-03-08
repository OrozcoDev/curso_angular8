import { Component, OnInit } from '@angular/core';

const fibonacci = (num: number): number => {
  if (num == 1 || num == 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  name!: string;

  users= [
    {
      name: 'nicolas',
      number: 2 
    },
    {
      name: 'juan',
      number: 4 
    }
  ]

  constructor(){}

  ngOnInit(): void {
    
  }

  addUser(){
    this.users.push({
      name: this.name,
      number:15
    });
    this.name='';
  }


  calcfib(num: number) {
    console.log('fib');
    return fibonacci(num);
  }

}

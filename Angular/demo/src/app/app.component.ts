import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // studentName = "Javascript1";
  // student = {
  //   name: "from Object"
  // };

  // currentTodo = "";
  // todos: any = ["a", "b", "c", "d", "e"];

  // addTodo(){
  //   this.todos.push(this.currentTodo) ;
  //   this.currentTodo = "";
  // }


  cart: any = [];

  products: any = [{
    name: "one+6",
    desc: "This is an awesome mobile. the card title and make up the bulk of the card's content.",
    cost: "30000",
  },{
    name: "one+6t",
    desc: "This is an awesome mobile 1. the card title and make up the bulk of the card's content.",
    cost: "32000",
  },{
    name: "one+7",
    desc: "This is an awesome mobile 2. the card title and make up the bulk of the card's content.",
    cost: "35000",
  },{
    name: "one+6",
    desc: "This is an awesome mobile. the card title and make up the bulk of the card's content.",
    cost: "30000",
  },{
    name: "one+6t",
    desc: "This is an awesome mobile 1. the card title and make up the bulk of the card's content.",
    cost: "32000",
  },{
    name: "one+7",
    desc: "This is an awesome mobile 2. the card title and make up the bulk of the card's content.",
    cost: "35000",
  },{
    name: "one+6",
    desc: "This is an awesome mobile. the card title and make up the bulk of the card's content.",
    cost: "30000",
  },{
    name: "one+6t",
    desc: "This is an awesome mobile 1. the card title and make up the bulk of the card's content.",
    cost: "32000",
  },{
    name: "one+7",
    desc: "This is an awesome mobile 2. the card title and make up the bulk of the card's content.",
    cost: "35000",
  },{
    name: "one+6",
    desc: "This is an awesome mobile. the card title and make up the bulk of the card's content.",
    cost: "30000",
  },{
    name: "one+6t",
    desc: "This is an awesome mobile 1. the card title and make up the bulk of the card's content.",
    cost: "32000",
  },{
    name: "one+7",
    desc: "This is an awesome mobile 2. the card title and make up the bulk of the card's content.",
    cost: "35000",
  },{
    name: "one+6",
    desc: "This is an awesome mobile. the card title and make up the bulk of the card's content.",
    cost: "30000",
  },{
    name: "one+6t",
    desc: "This is an awesome mobile 1. the card title and make up the bulk of the card's content.",
    cost: "32000",
  },{
    name: "one+7",
    desc: "This is an awesome mobile 2. the card title and make up the bulk of the card's content.",
    cost: "35000",
  },{
    name: "one+6",
    desc: "This is an awesome mobile. the card title and make up the bulk of the card's content.",
    cost: "30000",
  },{
    name: "one+6t",
    desc: "This is an awesome mobile 1. the card title and make up the bulk of the card's content.",
    cost: "32000",
  },{
    name: "one+7",
    desc: "This is an awesome mobile 2. the card title and make up the bulk of the card's content.",
    cost: "35000",
  }];

  addToCart(product){
    this.cart.push(product);
  }

  removeFromCart(product){
  }

  // handleClick(){
  //   alert("Button Clicked");
  // }

  // inputChanged(event){
  //   this.studentName = event.target.value;
  // }

}

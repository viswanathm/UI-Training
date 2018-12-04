import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viswanath',
  templateUrl: './viswanath.component.html',
  styleUrls: ['./viswanath.component.css']
})
export class ViswanathComponent implements OnInit {


  firstName = "Viswanath";
  lastName = "M";


  constructor() { }

  ngOnInit() {
  }

  sayFirstName(){
    alert(this.firstName);
  }

}

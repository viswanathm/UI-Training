import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = "Test1";
  isArticleVisible = true;
  isInputDisabled = true;
  role = "admin";
  article = {name: "Viswanath", role: "admin"};
  articles = [
    {name: "Viswanath", role: "admin"},
    {name: "Arun", role: "normal"},
    {name: "Mahesh", role: "normal"}
  ];

  handleClick(){
    alert("Hi");
  }
}

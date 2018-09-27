import { Component, OnInit } from '@angular/core';
import { TextTrasformService } from '../text-trasform.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = "rest";
  data = "test";
  constructor(private transform:TextTrasformService) { }

  ngOnInit() {}



  inputChanged(event){
    this.data = this.transform.capitalize(event.target.value);
  }
}

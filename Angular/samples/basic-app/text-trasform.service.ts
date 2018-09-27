import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextTrasformService {

  constructor() { }

  capitalize(str){
    return str.toUpperCase();
  }
}

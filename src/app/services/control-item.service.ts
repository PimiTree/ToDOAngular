import { Injectable } from '@angular/core';
import {ToDo} from "../models/item";
import {items} from "../data/data";

@Injectable({
  providedIn: 'root'
})

export class ControlItemService {
  itemsBatch:ToDo[] = items;

  put(value:string) {
    if (value === '') return
    this.itemsBatch.push({text:value});
  }
  delete(key:number) {
    this.itemsBatch.splice(+key, 1);
  }
}

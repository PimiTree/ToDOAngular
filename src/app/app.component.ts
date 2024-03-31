import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ItemComponent} from "./components/item/item.component";
import {DoItemComponent} from "./components/do-item/do-item.component";
import {ToDo} from "./models/item";
import {ControlItemService} from "./services/control-item.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ItemComponent, DoItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements
  DoCheck {

  constructor(
    public createItemService: ControlItemService
  ) {
  }

  ngDoCheck(): void {
    this.items = this.createItemService.itemsBatch
    console.log('ngDoCheck')
  }
  title = 'voron-todo';
  items: ToDo[] = this.createItemService.itemsBatch;



}

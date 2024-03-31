import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ControlItemService} from "../../services/control-item.service";

@Component({
  selector: 'app-do-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './do-item.component.html',
  styleUrl: './do-item.component.scss'
})
export class DoItemComponent {

  constructor(
    public controlItemService: ControlItemService
  ) {}

  createItemText = '';

  public log() {
    console.log(this.createItemText)
  }

  public clearContext() {
    this.createItemText = ''
  }
}

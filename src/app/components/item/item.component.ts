import {AfterViewChecked, Component, DoCheck, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {ToDo} from "../../models/item";
import {CommonModule} from "@angular/common";
import {ControlItemService} from "../../services/control-item.service";



@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements AfterViewChecked {
  constructor(
    // private rerender: Renderer2,
    public createItemService: ControlItemService
  ) {}

  isEditable = false;
  @Input()  id: number;
  @Input() item: ToDo;
  @ViewChild('editableEl') editableEl : ElementRef;

  public setEditable() {

    this.isEditable = !this.isEditable;
    // this.rerender.setAttribute(this.editableEl.nativeElement, 'contenteditable', `${this.isEditable}`) // way to implement next string with focus it adds one render tick in script
    // if (this.isEditable) this.editableEl.nativeElement.focus();
  }
  public log() {
    console.log('not private in component')
  }

  ngAfterViewChecked (): void {
    if (this.isEditable) this.editableEl.nativeElement.focus(); // implement focus
  }
}

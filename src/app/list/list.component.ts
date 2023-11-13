import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Cv } from "../model/cv";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() cvs: Cv[] = [];
  @Input() isOpen=false;

  @Output() isOpenListChange = new EventEmitter<boolean>();
  onClick() {
    this.isOpen=false;
    this.isOpenListChange.emit( this.isOpen );
  }





}

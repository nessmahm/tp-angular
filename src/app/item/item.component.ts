import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Cv } from "../model/cv";
import { CvService } from "../service/cv.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input({required:true,})
  cv:Cv | null = null ;
  @Input() isOpen=false;

  @Output()
  selectCv = new EventEmitter<Cv>();
  constructor(private cvService: CvService) {}
  onSelectCv() {
    if (this.cv) this.cvService.selectCv(this.cv);
    this.isOpen=false;
    console.log("open",this.isOpen)
  }
}

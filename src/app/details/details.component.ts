import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cv} from "../model/cv";
import {EmbaucheService} from "../service/embauche.service";
import {CvService} from "../service/cv.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  estEmbaucher:boolean=false;

  @Input()  cv!:Cv;
  isOpen:boolean=false;

  @Output()
  embaucher = new EventEmitter<Cv>();
  @Output() isOpenListChange = new EventEmitter<boolean>();

  constructor(private embauche: EmbaucheService) {
  }
  onEmbaucherCv() {
    this.isOpen=true;
    this.isOpenListChange.emit( this.isOpen );
    if (this.cv) this.embauche.embaucher(this.cv);
    this.estEmbaucher=true;
  }

}

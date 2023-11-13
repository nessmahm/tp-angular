import {Component, EventEmitter, Output} from '@angular/core';
import {CvService} from "../service/cv.service";
import {Cv} from "../model/cv";
import {EmbaucheService} from "../service/embauche.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
cvs:Cv[]=[];
embauches: Cv[] = [];
selectedCv: Cv | null = null;
isOpenList:boolean=false;

  toggleOpen(value: boolean) {
    this.isOpenList = value
  }
  constructor(
    private cvService : CvService,
    private embaucheService : EmbaucheService,

)  {
    this.cvs=this.cvService.getCvs();
    this.cvService.getSelectCvObservable().subscribe((selectedCv) => {
    this.selectedCv = selectedCv;
    });

    this.embaucheService.getListEmbaucheObservable().subscribe((embauches) => {
      this.embauches = embauches;
    });
  }
}

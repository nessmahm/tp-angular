import { Component } from '@angular/core';
import {Cv} from "../model/cv";
import {CvService} from "../service/cv.service";
import {EmbaucheService} from "../service/embauche.service";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent {
  cv: Cv | undefined;
  embauches:Cv[]=[];
  isEmbaucher:boolean=false;
  constructor(
    private cvService : CvService,
    private embaucheService : EmbaucheService,
)
  {
    this.cv=this.cvService.getCvById("1");
    this.embaucheService.getListEmbaucheObservable().subscribe((embauches) => {
      this.embauches = embauches;
    });
    //this.isEmbaucher=this.embaucheService.estDejaEmbauche()

  }
  onEmbaucherCv() {
    if (this.cv) {
      this.embaucheService.embaucher(this.cv);
      this.isEmbaucher=false;
    }
  }

}

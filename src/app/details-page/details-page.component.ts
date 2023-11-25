import { Component } from '@angular/core';
import {Cv} from "../model/cv";
import {CvService} from "../service/cv.service";
import {EmbaucheService} from "../service/embauche.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent   {
  cv: Cv | undefined;
  embauches:Cv[]=[];
  isEmbaucher:boolean=false;
  cvId:string|undefined;
  isOpenList:boolean=false;
  cvLoaded:boolean=false;

  constructor(
    private cvService : CvService,
    private embaucheService : EmbaucheService,
    private route: ActivatedRoute,
    private router: Router,
)
  {
    this.embaucheService.getListEmbaucheObservable().subscribe((embauches) => {
      this.embauches = embauches;
    });
    this.route.params.subscribe(params => {
      this.cvId = params['id'];
      this.cvService.getCvById(this.cvId || "").subscribe(
        (response: any) => {
          if (response) {
            this.cv = new Cv(response.id, response.name, response.firstname, response.job, response.path);
          }
        },
        (error) => {
          console.log(error);
        },
        ()=>{console.log("hehe")
        }
      );
      console.log("response",this.cv)
      this.cvLoaded=true

    })
  }
  onEmbaucherCv() {
    if (this.cv) {
      this.embaucheService.embaucher(this.cv);
      this.isEmbaucher=false;
    }
    this.isOpenList = true

  }
  deletecv()
    {
      this.cvService.deleteCvById(this.cvId || "").subscribe(
        (response: any) => {

        },
        (error) => {
          console.log(error);
        }
      );
      this.router.navigate(["cv"])
    }


}

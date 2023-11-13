import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private embauches: Cv[] = [];
  private listEmbauche = new Subject<Cv[]>();

  constructor() {
    this.embauches=[
      new Cv(1,"A","B","GL","Software eng","https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_640.png"),
      new Cv(4,"Marry","Hey","Tech","eng","https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"),
    ]
  }
  getEmbauches(): Cv[] {
    return this?.embauches;

  }
  estDejaEmbauche(cv: Cv): boolean {
    return this.embauches.some((c) => c.id === cv.id);
  }
  embaucher(cv: Cv): void {
    if(this.estDejaEmbauche(cv)==true)
    {
      alert("deja embaucher");

    }
    else {
      this.embauches.push(cv);
      this.listEmbauche.next(this.getEmbauches());
    }

  }
   retirerEmbauche(cv: Cv): void {
    this.embauches = this.embauches.filter((c) => c.id !== cv.id);
    this.listEmbauche.next(this.getEmbauches());
  }

  private emitListEmbauche() {
    this.listEmbauche.next([...this.embauches]);
  }
  getListEmbaucheObservable() {
    return this.listEmbauche.asObservable();
  }
}

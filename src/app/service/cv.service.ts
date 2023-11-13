import {Injectable, OnInit} from '@angular/core';
import {Cv} from "../model/cv";
import { Subject } from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CvService implements OnInit {
    cvs:Cv[];
    private selectCvSubject = new Subject<Cv>();

  constructor(private http:HttpClient) {
    this.cvs=[
      new Cv(1,"Nessma","Hamidou","GL","Software eng","https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_640.png"),
      new Cv(2,"Maissene","Hamidou","GL","Software eng","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXp3DxP80ArpRzsB0XWBG9Ow5GeuefbLrUHw&usqp=CAU"),
      new Cv(3,"Alice","Doe","Bio","eng","https://cdn-icons-png.flaticon.com/512/219/219969.png"),
      new Cv(4,"John","Doe","Tech","eng","https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"),
      new Cv (5,"Name","Lastname","prof")
    ]
    this.http.get('https://apilb.tridevs.net/api/personnes').subscribe(
      (response:any)=> {
        if (Array.isArray(response)) {
          response.forEach(obj => {
           const cv = new Cv (obj.id,obj.name,obj.firstname,obj.job,obj.path)
            this.cvs.push(cv)

          });
        } else {
          alert("Expected an array but received the data");

          console.error('Expected an array but received an object:', response);
        }
        },
      (error)=>{
        console.log(error)
      },
      ()=>{}
    )
  }
  getCvs() {


    return this?.cvs;
  }
  getSelectCvObservable() {
    return this.selectCvSubject.asObservable();
  }

  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }

  ngOnInit() {
  }

}

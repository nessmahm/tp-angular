import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { FormComponent } from './form/form.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import {DetailsPageComponent} from "./details-page/details-page.component";

const routes: Routes = [{
  path: 'mini-word',
  component: MiniWordComponent
},
  {
    path: 'login',
    component: FormComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: 'cv/:id',
    component: DetailsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

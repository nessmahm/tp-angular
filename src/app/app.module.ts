import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authReducer } from './auth/auth.reducer';
import { ColorTextDirective } from './directives/color-text/color-text.directive';
import { FormComponent } from './form/form.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { CvComponent } from './cv/cv.component';
import { DetailsComponent } from './details/details.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { DetailsPageComponent } from './details-page/details-page.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    CvComponent,
    DetailsComponent,
    DetailsPageComponent,
    MiniWordComponent,
    ColorTextDirective,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({auth: authReducer}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './nav-bar/navbar/navbar.component';
import { FontsizeComponent } from './font-size/fontsize/fontsize.component';
import {FormsModule} from "@angular/forms";
import { ImageComponent } from './image/image/image.component';
import { CalculatorComponent } from './calculator/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FontsizeComponent,
    ImageComponent,
    CalculatorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

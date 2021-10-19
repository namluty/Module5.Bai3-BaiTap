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
import { NameCardComponent } from './name-card/name-card/name-card.component';
import { ListNameCardComponent } from './name-card/list-name-card/list-name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer/countdown-timer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FontsizeComponent,
    ImageComponent,
    CalculatorComponent,
    NameCardComponent,
    ListNameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent,
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

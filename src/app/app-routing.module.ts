import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {FontsizeComponent} from "./font-size/fontsize/fontsize.component";
import {ImageComponent} from "./image/image/image.component";
import {CalculatorComponent} from "./calculator/calculator/calculator.component";
import {ListNameCardComponent} from "./name-card/list-name-card/list-name-card.component";
import {ProgressBarComponent} from "./progress-bar/progress-bar/progress-bar.component";
import {RatingBarComponent} from "./rating-bar/rating-bar/rating-bar.component";
import {CountdownTimerComponent} from "./countdown-timer/countdown-timer/countdown-timer.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'font-size', component: FontsizeComponent},
  {path: 'img', component: ImageComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'name-card', component: ListNameCardComponent},
  {path: 'loading', component: ProgressBarComponent},
  {path: 'rating', component: RatingBarComponent},
  {path: 'countdown', component: CountdownTimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {FontsizeComponent} from "./font-size/fontsize/fontsize.component";
import {ImageComponent} from "./image/image/image.component";
import {CalculatorComponent} from "./calculator/calculator/calculator.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'font-size', component: FontsizeComponent},
  {path: 'img', component: ImageComponent},
  {path: 'calculator', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

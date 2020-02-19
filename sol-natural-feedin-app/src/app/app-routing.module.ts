import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FoodCalculatorComponent} from './components/food-calculator/food-calculator.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calculator', component: FoodCalculatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

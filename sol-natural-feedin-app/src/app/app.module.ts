import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FoodCalculatorComponent } from './components/food-calculator/food-calculator.component';
import { FormComponent } from './components/food-calculator/form/form.component';
import { MealTableComponent } from './components/food-calculator/meal-table/meal-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodCalculatorComponent,
    FormComponent,
    MealTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp((environment.firebaseConfig)),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

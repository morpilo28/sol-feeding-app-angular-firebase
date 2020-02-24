import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormComponent } from './components/calculator/form/form.component';
import { CalculatorResultsComponent } from './components/calculator/calculator-results/calculator-results.component';
import { MealTableComponent } from './components/calculator/calculator-results/meal-table/meal-table.component';
import { ObjKeysToArrayPipe } from './pipes/obj-keys-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    FormComponent,
    CalculatorResultsComponent,
    MealTableComponent,
    ObjKeysToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

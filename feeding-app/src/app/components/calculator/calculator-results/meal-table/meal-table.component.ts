import { Component, OnInit } from '@angular/core';
import { MealCalculatorFormModel } from 'src/app/models/meal-calculator-form-model';
import { FormDataService } from 'src/app/services/form-data.service';
import { MealModel } from 'src/app/models/meal-model';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-meal-table',
  templateUrl: './meal-table.component.html',
  styleUrls: ['./meal-table.component.css']
})
export class MealTableComponent implements OnInit {
  public formData: MealCalculatorFormModel;
  public meal: MealModel;
  public keys;
  public sum: number;
  constructor(private mealService: MealService, private formDataService: FormDataService) { }

  ngOnInit() {
    this.formDataService.getFormData().subscribe(data => {
      this.formData = data;
      this.mealService.calculateMeal(this.formData);
      this.mealService.getMealCalculation().subscribe(res => {
        this.meal = res;
        this.keys = Object.keys(this.meal);
      })
    });
  }

  a(key, numOfMeals) {
    this.sum = key * numOfMeals / 1000;
  }
}

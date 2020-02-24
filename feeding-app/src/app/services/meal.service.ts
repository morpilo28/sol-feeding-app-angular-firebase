import { Injectable } from '@angular/core';
import { MealModel } from '../models/meal-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private meal: BehaviorSubject<MealModel>;

  constructor() {
    this.meal = new BehaviorSubject<MealModel>({
      total: 0,
      muscle: 0,
      liver: 0,
      inside: 0,
      bone: 0,
    })
  }

  calculateMeal(formData) {
    const totalMeal = formData.weight * 1000 * formData.feedingPercentage / 100;
    this.meal.next({
      total: totalMeal,
      muscle: (80 / 100) * totalMeal,
      liver: (5 / 100) * totalMeal,
      inside: (5 / 100) * totalMeal,
      bone: (10 / 100) * totalMeal,
    })
  }

  getMealCalculation(): BehaviorSubject<MealModel> {
    return this.meal;
  }
}

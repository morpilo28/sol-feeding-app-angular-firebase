import { Injectable } from '@angular/core';
import { MealCalculatorFormModel } from '../models/meal-calculator-form-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: BehaviorSubject<MealCalculatorFormModel>;
  private formInputs: MealCalculatorFormModel = { weight: 0, feedingPercentage: 0, meals: 0 };

  constructor() {
    this.formData = new BehaviorSubject<MealCalculatorFormModel>(this.formInputs);
  }

  updateFormData(formData) {
    this.formData.next(formData)
  }

  getFormData(): BehaviorSubject<MealCalculatorFormModel> {
    return this.formData;
  }
}

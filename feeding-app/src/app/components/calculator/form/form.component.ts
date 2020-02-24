import { Component, OnInit } from '@angular/core';
import { MealCalculatorFormModel } from 'src/app/models/meal-calculator-form-model';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public form: MealCalculatorFormModel = { weight: '', feedingPercentage: '', meals: '' };
  private timeOut: number;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
  }

  onKeyUp() {
    clearTimeout(this.timeOut);
    this.timeOut = window.setTimeout(() => {
      this.formDataService.updateFormData(this.form);
    }, 1 * 1000);
  }

}

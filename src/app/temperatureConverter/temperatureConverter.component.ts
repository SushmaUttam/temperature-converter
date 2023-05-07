import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {

  celsiusInput: any = '';
  fahrenheitInput: any = '';

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  updateValues(field) {
    switch (field) {
      case 'celsiusInput':
        this.fahrenheitInput = this.celsiusInput * 9/5 + 32;
        if (!Number.isInteger(this.fahrenheitInput)) {
          this.fahrenheitInput = this.fahrenheitInput.toFixed(1);
        }
        break;
      case 'fahrenheitInput':
        this.celsiusInput = (this.fahrenheitInput - 32) * 5/9;
        if (!Number.isInteger(this.celsiusInput)) {
          this.celsiusInput = this.celsiusInput.toFixed(1);
        }
        break;
    }
  }

}

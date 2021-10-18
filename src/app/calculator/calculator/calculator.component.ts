import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  calculator1 (number1: any,number2: any) {
    this.result = parseInt(number1) + parseInt(number2);
  }
  calculator2 (number1: any,number2: any) {
    this.result = number1 - number2;
  }
  calculator3 (number1: any,number2: any) {
    this.result = number1 * number2;
  }
  calculator4 (number1: any,number2: any) {
    this.result = number1 / number2;
  }
}

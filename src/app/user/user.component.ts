import { Component, signal } from '@angular/core';
import { investmentService } from '../investment.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserInputsComponent {
  constructor(private investServ: investmentService) {}

  initialInvestmentValue = signal('0');
  annualInvestmentValue = signal('0');
  expectedReturnValue = signal('5');
  durationValue = signal('10');

  onSubmit() {
    this.investServ.onCalculateInvestmentResults({
      initialInvestment: Number(this.initialInvestmentValue()),
      annualInvestment: Number(this.annualInvestmentValue()),
      expectedReturn: Number(this.expectedReturnValue()),
      duration: Number(this.durationValue()),
    });
    this.initialInvestmentValue.set('0');
    this.annualInvestmentValue.set('0');
    this.expectedReturnValue.set('5');
    this.durationValue.set('10');
  }
}

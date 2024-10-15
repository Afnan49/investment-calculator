import { Injectable, signal } from '@angular/core';
import { userData } from './user/user.model';
import { investmentResult } from './investment-results/investment.model';

@Injectable({ providedIn: 'root' })
export class investmentService {
  results = signal<investmentResult[] | undefined>(undefined);

  onCalculateInvestmentResults(data: userData) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.results.set(annualData);
  }
}

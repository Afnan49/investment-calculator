import { Component, computed, inject } from '@angular/core';
import { investmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investServe = inject(investmentService);

  // constructor(private investServe: investmentService) {}

  // private investServe: investmentService;
  // constructor(investServe: investmentService) {
  //   this.investServe = investServe;
  // }

  // ============================================

  // get results() {
  //   return this.investServe.results;
  // }

  // results = this.investServe.results.asReadonly();

  results = computed(() => this.investServe.results());
}

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { userModule } from './user/user.module';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, userModule],
})
export class AppModule {}

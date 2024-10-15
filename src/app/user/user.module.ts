import { NgModule } from '@angular/core';
import { UserInputsComponent } from './user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserInputsComponent],
  imports: [FormsModule],
  exports: [UserInputsComponent],
})
export class userModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiselectLibComponent } from './multiselect-lib.component';



@NgModule({
  declarations: [
    MultiselectLibComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  exports: [
    MultiselectLibComponent
  ]
})
export class MultiselectLibModule { }

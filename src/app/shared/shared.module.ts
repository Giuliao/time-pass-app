import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipNumberComponent } from './components/flip-number/flip-number.component';



@NgModule({
  declarations: [
    FlipNumberComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlipNumberComponent
  ]
})
export class SharedModule { }

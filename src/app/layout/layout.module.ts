import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule as DevUILayoutModule } from 'ng-devui';
import { DefaultComponent } from './default/default.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { DropDownModule } from 'ng-devui/dropdown';



@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    DevUILayoutModule,
    LayoutRoutingModule,
    DropDownModule
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ProgressModule } from 'ng-devui/progress';
import { TooltipModule } from 'ng-devui/tooltip';

import { TimeProgressComponent } from './time-progress/time-progress.component';

@NgModule({
  declarations: [
    TimeProgressComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    ProgressModule,
    TooltipModule,
  ]
})
export class PagesModule { }

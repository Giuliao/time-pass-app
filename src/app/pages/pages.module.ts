import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ProgressModule } from 'ng-devui/progress';
import { TooltipModule } from 'ng-devui/tooltip';
import { CardModule } from 'ng-devui/card';
import { InputNumberModule } from 'ng-devui';
import { ButtonModule } from 'ng-devui/button';
import { LoadingModule } from 'ng-devui/loading';
import { SharedModule } from '../shared/shared.module';

import { TimeProgressComponent } from './time-progress/time-progress.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { FlipClockComponent } from './flip-clock/flip-clock.component';

@NgModule({
  declarations: [
    TimeProgressComponent,
    StopWatchComponent,
    FlipClockComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    LayoutModule,
    ProgressModule,
    TooltipModule,
    CardModule,
    InputNumberModule,
    ButtonModule,
    LoadingModule
  ]
})
export class PagesModule { }

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

import { TimeProgressComponent } from './time-progress/time-progress.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';

@NgModule({
  declarations: [
    TimeProgressComponent,
    StopWatchComponent
  ],
  imports: [
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

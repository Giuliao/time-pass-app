import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from "../layout/default/default.component"
import { TimeProgressComponent } from "./time-progress/time-progress.component";
import {FlipClockComponent } from "./flip-clock/flip-clock.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: TimeProgressComponent
      },
      {
        path: 'flip-clock',
        component: FlipClockComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

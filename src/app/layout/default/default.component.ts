import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  public menuItem = [
    {
      route: '/',
      text: 'time pass', 
    },
    {
      route: '/flip-clock',
      text: 'flip clock', 
    }
  ]
  constructor() { }

  public onToggle(event: any): void {
  }

}

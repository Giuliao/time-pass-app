import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
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

  ngOnInit(): void {
  }


  public onToggle(event: any): void {
  }

}

import { Component } from '@angular/core';
import { BaseService } from '../../core/base.service'

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  public menuItem = [
    {
      route: `${this.baseService.publicBaseHref}`,
      text: 'time pass', 
    },
    {
      route: `${this.baseService.publicBaseHref}/flip-clock`,
      text: 'flip clock', 
    }
  ]
  constructor(
    private baseService: BaseService
  ) { }

  public onToggle(event: any): void {
  }

}

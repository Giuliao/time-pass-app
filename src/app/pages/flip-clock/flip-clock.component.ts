import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-clock',
  templateUrl: './flip-clock.component.html',
  styleUrls: ['./flip-clock.component.scss']
})
export class FlipClockComponent implements OnInit {

  constructor() { }


  public hour1 = 0;
  public hour2 = 0;
  public minute1 = 0;
  public minute2 = 0;
  public handleInterval:any;
  public count = 1;

  ngOnInit(): void {
    this.initTime();

    this.handleInterval = setInterval(()=>{
      this.initTime();
    }, 1000)
  }

  ngOnDestroy(): void {
    this.handleInterval();
  }


  initTime(): void {
    const t = new Date(Date.now());
    [this.hour1=0, this.hour2=0] = this.splitNum(t.getHours());
    [this.minute1=0, this.minute2=0] = this.splitNum(t.getMinutes());
  }


  splitNum(n: number): number[] {
    return n.toString().split('').map(Number);
  }

}

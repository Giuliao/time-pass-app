import { Component, OnInit, OnDestroy } from '@angular/core';

const SECONDS_OF_A_DAY =  86400; 

@Component({
  selector: 'app-time-progress',
  templateUrl: './time-progress.component.html',
  styleUrls: ['./time-progress.component.scss']
})
export class TimeProgressComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    this.intervalId = setInterval(()=>{
      this.time = new Date();
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private time = new Date();
  private intervalId: any;

  public get calcTimePercent(): number {
    const today = new Date();
    return (this.time.getHours()*3600 +this.time.getMinutes()*60 +this.time.getSeconds()) / SECONDS_OF_A_DAY * 100;
  }

  public get now(): string {
    return `${this.time}`;
  }

  public get progressText():string {
    return `今天已经过去${this.calcTimePercent.toFixed(2)}%`
  }


}

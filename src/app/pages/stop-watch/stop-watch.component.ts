import { Component, OnInit, OnDestroy} from '@angular/core';

const MINUTES = 60;

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss']
})
export class StopWatchComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.stop();
  }
  public time = 45 * MINUTES;
  public intervalId: any;
  public timeValue: number = 45;
  public calcTime : number = 45 * MINUTES;

  public get percentageText() : string {
    if(this.time > 60) {
      return `${(this.time / MINUTES).toFixed(0)} min`;
    }
    return `${(this.time).toFixed(0)} s`;
  }

  public get percentage(): number {
    return this.time / this.calcTime * 100;
  }


  public start() {
    this.stop();
    this.time = this.timeValue * MINUTES;
    this.calcTime = this.timeValue * MINUTES;
    this.intervalId = setInterval(()=>{
      this.time -= 1;
      if(this.time <= 0) {
        new Notification('时间到')
        this.stop();
      }
    }, 1000)
  }

  public stop() {
    if(this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

}

import { Component, OnInit, OnDestroy} from '@angular/core';

const MINUTES = 60;
const SECONDS = 60;
const MICRO_SECONDS = 1000;
const UNIT = SECONDS * MICRO_SECONDS;
@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss']
})
export class StopWatchComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    // 请求允许通知
    Notification.requestPermission(function(status){});
  }

  ngOnDestroy(): void {
    this.stop();
  }

  public intervalId: any;
  public timeValue: number = 45;
  public calcTime : number = 45;
  private calcGap : number = 0;
  private startTime: number = 0;

  public get percentageText() : string {
    if(this.calcGap > this.timeValueByMiroSeconds ) {
      return '0';
    }
    const restTime = this.timeValueByMiroSeconds - this.calcGap;
    if(restTime > UNIT) {
      return `${(restTime / UNIT).toFixed(0)} min`;
    }

    return `${(restTime / MICRO_SECONDS).toFixed(0)} s`;
  }

  public get percentage(): number {
    if(this.calcGap > this.timeValueByMiroSeconds) {
      return 0;
    }

    const restTime = this.timeValueByMiroSeconds - this.calcGap;

    return (restTime / this.timeValueByMiroSeconds)* 100;
  }


  public start() {
    this.stop();
    this.startTime = Date.now();
    this.calcTime = this.timeValue;
    this.intervalId = setInterval(()=>{
      this.calcGap = Date.now() - this.startTime 
      if(this.calcGap >= this.timeValueByMiroSeconds) {
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

  private get timeValueByMiroSeconds(): number {
    return this.calcTime * UNIT;
  }

}

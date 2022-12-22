import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-flip-number',
  templateUrl: './flip-number.component.html',
  styleUrls: ['./flip-number.component.scss'],
  host: {
    '(@flipDown.start)': 'captureStartEvent($event)',
  },
  animations: [
    trigger('flipDown', [
      state(
        'start',
        style({
          'transform-origin': 'bottom',
          transform: 'perspective(1000px)',
        })
      ),
      state(
        'end',
        style({
          'transform-origin': 'bottom',
          transform: 'perspective(1000px) rotateX(-180deg) translateY(-0.5rem)',
        })
      ),
      transition('start => end', [animate('2s ease-in-out', )]),
    ])
  ],
})
export class FlipNumberComponent implements OnInit, OnChanges {
  @Input() public showNum: number = 0;
  @Input() public timeout: number = 2000;
  public bottomNum: number = 0;
  public topHalfTopNum: number = 0;
  public topHalfBottomNum: number = 0
  private topHalfTopNumHandle: any;
  private bottomNumHandle:any;
  private topHalfBottomNumHandle:any;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
   
    if(changes.showNum.isFirstChange()) {
      this.topHalfTopNum = this.showNum;
      this.bottomNum = this.showNum;
      this.topHalfBottomNum = this.showNum;
      return;
    }

   this.clearSetTimeout();

    this.bottomNumHandle = setTimeout(()=>{
      this.bottomNum = this.showNum;
    }, this.timeout)

    if (this.state === 'start') {
      this.setFirstState();
      this.toggle();
    } else {
     
      this.setSecondState();
      this.toggleSecond();
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.clearSetTimeout();
  }

  public state = 'start';
  public toggle(): void {
    this.state = 'end';
    this.stateSecond = 'start';
  }

  public setFirstState(): void {
    this.topHalfTopNumHandle = setTimeout(()=>{
      this.topHalfTopNum = this.showNum;
    }, this.timeout/2)
    this.topHalfBottomNum = this.showNum;
  }


  public stateSecond = 'start';
  public toggleSecond(): void {
    this.state = 'start';
    this.stateSecond = 'end';
  }

  public setSecondState(): void {
    this.topHalfBottomNumHandle =  setTimeout(()=>{
      this.topHalfBottomNum = this.showNum;
    }, this.timeout/2)
    this.topHalfTopNum = this.showNum;
  }

  public clearSetTimeout(): void {
    clearTimeout(this.topHalfBottomNumHandle);
    clearTimeout(this.bottomNumHandle);
    clearTimeout(this.topHalfTopNumHandle);
  }

}

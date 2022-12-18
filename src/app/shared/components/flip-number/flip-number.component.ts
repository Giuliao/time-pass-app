import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
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
      state('start', style({
        'transform-origin': "bottom",
        'z-index': '1',
        transform: "perspective(1000px)",
      })),
      state('end', style({
        'transform-origin': "bottom",
        transform: "perspective(1000px) rotateX(-180deg) translateY(-0.5rem)",
      })),
      transition('start => end', [
        animate('2s ease-in-out')
      ]),
    ]),
    trigger('flipUp', [
      state('start', style({
        'transform-origin': "top",
        transform: "perspective(1000px)",
      })),
      state('end', style({
        'transform-origin': "top",
        "z-index": '-1',
        transform: "perspective(1000px) rotateX(-180deg) translateY(0.5rem)",
      })),
      transition('start => end', [
        animate('1s 2s')
      ]),
    ])
  ]
})
export class FlipNumberComponent implements OnInit {
  @Input() public showNum : number =1
  constructor() { }

  ngOnInit(): void {
  }
  public stateUp = true;
  public stateDown = true;
  public toggle(): void {
    this.stateDown = !this.stateDown
  }


  public stateUpSecond = true;
  public stateDownSecond = true;
  public toggleSecond(): void {
    this.stateDown = !this.stateDown;
   
  } 

  public onAnimationStart(event: any) {
    console.log("start");
    console.log(event);
  }

}

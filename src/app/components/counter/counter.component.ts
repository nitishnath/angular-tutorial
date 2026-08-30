import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter = 0;

  constructor() { }

  increment() : void {
    this.counter++
  }

  decrement(): void {
    this.counter --;
  }

  reset(): void {
    this.counter = 0
  }

  ngOnInit(): void {
  }
}

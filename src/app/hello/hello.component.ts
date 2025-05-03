import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent implements OnInit, OnDestroy {
  counter = 0;
  private intervalId: any;

  // starts the timer
  ngOnInit() {
    this.startTimer();
  }
  startTimer() {
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
    console.log('Interval Id', this.intervalId);
  }

  // clear the timer
  ngOnDestroy() {
    clearInterval(this.intervalId);
    console.log('On destroy timer stopped');
  }
}

import { Component, Input } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent { 
  // @Input() carNames: string[] = [];
  carNames: string[] = [];

  constructor(private carService: CarService) { }
  // this.carService.carNames$.subscribe(names => this.carNames = names);

  ngOnInit() {
    this.carService.carNames$.subscribe((names) => {
      this.carNames = names;
    });
  }

}

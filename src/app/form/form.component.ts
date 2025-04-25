import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  carName = '';
  // @Output() carAdded = new EventEmitter<string>();

  constructor(private carService: CarService) {}

  onSubmit() {
    console.log(this.carName);
    // sending the value outside component
    // this.carAdded.emit(this.carName);

    // sending the value through service
    this.carService.addCarName(this.carName);
    this.carName = '';    
  }
}

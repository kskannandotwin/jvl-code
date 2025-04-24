import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  carName = '';
  @Output() carAdded = new EventEmitter<string>();

  onSubmit() {
    console.log(this.carName);
    this.carAdded.emit(this.carName);
    this.carName = '';    
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  imports: [FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'jvl-code';
  // carNames: string[] = [];

  // onCarAdded(carName: string) {
  //   console.log(carName, 'from app');
  //   this.carNames.push(carName);
  // }
}

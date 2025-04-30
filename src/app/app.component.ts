import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [ChildComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jvl-code';

  itemList = [
    { id: 1, name: 'Apple'},
    { id: 2, name: 'Banana'}
  ];

}

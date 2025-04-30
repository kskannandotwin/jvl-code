import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleMessageComponent } from './simple-message/simple-message.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SimpleMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jvl-code';
}

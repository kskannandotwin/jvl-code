import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [HelloComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jvl-code';

  showHello: boolean = true;
}

import { Component, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements DoCheck {
  title = 'jvl-code';
  prevTitle = 'Hello';

  ngDoCheck(): void {
    if (this.title !== this.prevTitle) {
      console.log('property changed', this.title);
    }
  }
}

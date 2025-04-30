import { AfterContentInit, Component, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-simple-message',
  imports: [],
  templateUrl: './simple-message.component.html',
  styleUrl: './simple-message.component.scss'
})
export class SimpleMessageComponent implements AfterContentInit {
  @ContentChildren('messageContent') messageElements!: QueryList<ElementRef>;

  ngAfterContentInit(): void {
    this.messageElements.forEach((element) => {
      console.log('Projected content', element.nativeElement.textContent);
    })
  }
}

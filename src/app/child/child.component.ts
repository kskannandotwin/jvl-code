import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges {
  @Input() items: any[] = [];
  @Input() title: string = '';
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      console.log('Items property changed', changes['items']);
    }

    if (changes['title']) {
      console.log('Title property changed', changes['title'].firstChange);
    }
  }

}

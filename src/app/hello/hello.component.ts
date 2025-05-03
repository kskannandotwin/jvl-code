import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello',
  imports: [FormsModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent implements AfterViewInit {
  // focus the input when once view initialized
  @ViewChild('nameInput')  nameInput!: ElementRef;
  ngAfterViewInit(): void {
    this.nameInput.nativeElement.focus();
    console.log('Input focused');
  }
}

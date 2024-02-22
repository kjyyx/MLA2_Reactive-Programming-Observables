import { Component } from '@angular/core';
import { Observable, of, map, interval, fromEvent, from, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers$: Observable<Number>;
  constructor() {}
}

const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

numbers$.subscribe((value) => console.log(value));

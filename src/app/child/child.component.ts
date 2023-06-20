import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  counter = 0;
  interval: any;

  /*
    Il component figlio gestisce e mostra a video, in un H1, un numero intero
    che viene incrementato di 1 ogni N ms (a vostra discrezione).
    Nel figlio è presente anche un bottone che interrompe questo counter e invia il numero al padre.
  */

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.counter++;
    }, 300);
  }
}

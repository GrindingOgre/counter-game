import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'counter-game';
  numeroVincente = Math.round(Math.random() * 30 + 1);
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'So its freaking live';
  soma = 1 + 1;
  test = function () {
    this.soma++;
  }
}

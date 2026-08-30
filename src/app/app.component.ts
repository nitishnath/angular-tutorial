import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tutorial';
  constructor () {
    setTimeout(() => {
      this.title = 'Changed Title';
    }, 2000)
  }
}

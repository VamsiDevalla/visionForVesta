import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'vesta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') theme: string;
  title = 'visionForVesta';
  constructor() {
    this.theme = 'light';
  }

  changeTheme(theme: string) {
    this.theme = theme;
  }
}

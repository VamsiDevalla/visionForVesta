import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'vesta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  themes = ['light', 'dark'];
  @HostBinding('class') theme: string;
  title = 'visionForVesta';
  appConfigFetched = false;
  loadingMessage = 'Please wait while we load application configurations';
  constructor() {
    this.theme = 'light';
  }

  changeTheme(theme: string) {
    this.theme = theme;
  }
}

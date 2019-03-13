import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vesta-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  themeChanged: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeTheme(theme: string) {
    this.themeChanged.emit(theme);
  }

}

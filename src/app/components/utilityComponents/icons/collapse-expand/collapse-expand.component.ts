import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vesta-collapse-expand',
  templateUrl: './collapse-expand.component.html',
  styleUrls: ['./collapse-expand.component.scss']
})
export class CollapseExpandComponent implements OnInit {

  isExpanded: boolean;

  constructor() { }

  ngOnInit() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}

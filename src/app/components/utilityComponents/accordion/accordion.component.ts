import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vesta-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'test accordion';
  }

}

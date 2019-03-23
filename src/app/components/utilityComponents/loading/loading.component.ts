import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vesta-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input()
  icon: string;
  @Input()
  message: string;
  @Input()
  loadingIndicator: string;

  constructor() { }

  ngOnInit() {
  }

}

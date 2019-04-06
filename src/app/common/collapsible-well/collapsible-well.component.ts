import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit {

  @Input() title: string;
  contentVisible = true;
  constructor() { }

  ngOnInit() {
  }

  toggleVisbility() {
    this.contentVisible = !this.contentVisible;
  }

}

import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  HandleClick() {
    // console.log('Button Click Handled!');
    this.eventClick.emit(this.event.name);
  }
}

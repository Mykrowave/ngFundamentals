import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-address',
  templateUrl: './event-address.component.html',
  styleUrls: ['./event-address.component.css']
})
export class EventAddressComponent implements OnInit {

  @Input() location: any;

  constructor() { }

  ngOnInit() {
  }

}

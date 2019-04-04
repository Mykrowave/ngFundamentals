import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event = {
    id: 1,
    name: 'Conference 101',
    date: '1/20/2030',
    time: '9:30 am',
    price: 599.99,
    imageUrl: '/assets/images/basic-shield.png',
    location: {
      address: '101 Conference Lane',
      city: 'Atlanta',
      country: 'United States'
    }
  };

  constructor() { }

  ngOnInit() {
  }
}

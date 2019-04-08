import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { EventService } from 'src/app/events/shared/event.service';
import { ISession } from 'src/app/events/shared/isession';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchTerm = '';
  foundSessions: ISession[];
  constructor(public authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(results => {
      this.foundSessions = results;
      console.log(this.foundSessions);
    });

  }

}

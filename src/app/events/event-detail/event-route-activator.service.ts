import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';
@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {


  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.eventService.getEvent(+route.params.id)) {
      return true;
    } else {
      this.router.navigate(['/404']);
      return false;
    }
  }

}

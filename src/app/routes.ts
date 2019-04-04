import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { EventRouteActivatorService } from './events/event-detail/event-route-activator.service';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: EventCreateComponent },
  { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorService]},
  { path: '404', component: NotFoundComponent },
  { path: '', pathMatch: 'full', redirectTo: '/events' }

];

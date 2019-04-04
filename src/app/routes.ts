import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventCreateComponent } from './events/event-create/event-create.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: EventCreateComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: '/events' }
];

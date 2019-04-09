import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { EventListResolverService } from './events/events-list/event-list-resolver.service';
import { SessionCreateComponent } from './events/sessions/session-create/session-create.component';
import { EventResolverService } from './events/event-detail/event-resolver.service';


export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
  { path: 'events/new', component: EventCreateComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventDetailComponent, resolve: {event: EventResolverService}},
  { path: '404', component: NotFoundComponent },
  { path: '', pathMatch: 'full', redirectTo: '/events' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'events/session/new', component: SessionCreateComponent }

];

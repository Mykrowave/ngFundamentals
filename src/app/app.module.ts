import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventAddressComponent } from './events/event-thumbnail/event-address.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { EventService } from './events/shared/event.service';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { RouterModule } from '@angular/router';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { EventRouteActivatorService } from './events/event-detail/event-route-activator.service';
import { EventListResolverService } from './events/events-list/event-list-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionCreateComponent } from './events/sessions/session-create/session-create.component';
import { SessionListComponent } from './events/sessions/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { SessionDurationPipe } from './events/shared/session-duration.pipe';
import { TOASTR_TOKEN } from './common/toastr.service';

const toastrStringKey = 'toastr';
const toastr = window[toastrStringKey];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventAddressComponent,
    NavBarComponent,
    EventDetailComponent,
    EventCreateComponent,
    NotFoundComponent,
    SessionCreateComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SessionDurationPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventRouteActivatorService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolverService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: EventCreateComponent) {
  if (component.isDirty) {
    return window.confirm('You havent saved your Event. Are you sure you wish to Cancel?');
  }
  return true;
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './routes';


import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventAddressComponent } from './events/event-thumbnail/event-address.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventAddressComponent,
    NavBarComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

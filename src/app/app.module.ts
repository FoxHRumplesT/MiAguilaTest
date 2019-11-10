import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RequestAguilaComponent } from './components/request-aguila/request-aguila.component';
import { GenericMapComponent } from './components/generic-map/generic-map.component';
import { RequestAguilaTripsComponent } from './components/request-aguila-trips/request-aguila-trips.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RequestAguilaComponent,
    GenericMapComponent,
    RequestAguilaTripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

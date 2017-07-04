import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdTabsModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/angular2-leaflet';
import { CovalentChipsModule } from '@covalent/core';
import { CovalentMenuModule } from '@covalent/core';
import { CovalentNotificationsModule } from '@covalent/core';
import { CovalentLayoutModule } from '@covalent/core';
import { CovalentMediaModule, TdDialogService } from '@covalent/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent, TimeElapsed } from './home.component';
import { PremiseComponent } from './premise/premise.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SpeakersComponent, DialogComponent } from './speakers/speakers.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CodeOfConductComponent } from '../code-of-conduct/code-of-conduct.component';
import { MapComponent } from '../map/map.component';
import { ContactComponent } from '../contact/contact.component';
import { PanellistComponent , DialogPannelComponent} from './panellist/panellist.component';
import { LoopbackComponent  } from '../loopback/loopback.component';
import { RegisterComponent } from '../register/register.component'
import { CarouselModule } from 'ngx-bootstrap';
import { ModalModule, OverlayRenderer, DOMOverlayRenderer, Overlay } from 'angular2-modal';
import { Modal, BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { CovalentExpansionPanelModule } from '@covalent/core';
import { MdChipsModule } from '@angular/material';
import { PushNotificationsModule, PushNotificationsService } from 'angular2-notifications';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AppService} from '../app.service'

const MODAL_PROVIDERS = [
  Modal,
  Overlay,
  { provide: OverlayRenderer, useClass: DOMOverlayRenderer }
];

@NgModule({
  declarations: [
    HomeComponent,
    PremiseComponent,
    FooterComponent,
    AboutComponent,
    SpeakersComponent,
    ScheduleComponent,
    CodeOfConductComponent,
    MapComponent,
    ContactComponent,
    PanellistComponent,
    LoopbackComponent,
    DialogComponent,
    DialogPannelComponent,
    RegisterComponent,
    TimeElapsed
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HomeRoutingModule,
    MdCardModule,
    MdMenuModule,
    MdInputModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTooltipModule,
    MdDialogModule,
    MdTabsModule,
    CovalentChipsModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentMenuModule,
    CovalentNotificationsModule,
    LeafletModule,
    CarouselModule.forRoot(),
    ModalModule,
    BootstrapModalModule,
    CovalentExpansionPanelModule,
    MdChipsModule,
    PushNotificationsModule
  ],
  exports :[TimeElapsed],
  entryComponents: [DialogComponent],
  providers: [MODAL_PROVIDERS, TdDialogService, TimeElapsed, AppService, AngularFireDatabase, PushNotificationsService]
})
export class HomeModule { }

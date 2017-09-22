import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdSidenavModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule} from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';


import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationTypeComponent } from './registration-type/registration-type.component';
import { AppRoutingModule} from './app-routing.module';
import { LoginTypeComponent } from './login-type/login-type.component';
import { RegistrationEmailComponent } from './registration-email/registration-email.component';
import { LoginEmailComponent } from './login-email/login-email.component';
import { RegCompleteComponent } from './reg-complete/reg-complete.component';
import { HomeComponent } from './home/home.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { ScansComponent } from './scans/scans.component';
import { RegistrationService } from './registration.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserService } from './user.service';
import {PetService} from './pet.service';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetScanComponent } from './pet-scan/pet-scan.component';
import {ScansService} from './scans.service';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { LostPetsComponent } from './lost-pets/lost-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    RegistrationTypeComponent,
    LoginTypeComponent,
    RegistrationEmailComponent,
    LoginEmailComponent,
    RegCompleteComponent,
    HomeComponent,
    PetListComponent,
    ScansComponent,
    UserDetailComponent,
    UserEditComponent,
    PetDetailComponent,
    PetScanComponent,
    PetEditComponent,
    TemperatureComponent,
    LostPetsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdSidenavModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpModule,
    FormsModule,
    // maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvgtW31xDxw1m1rZVX4Onp298qPQXevfY'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [
    RegistrationService,
    UserService,
    PetService,
    ScansService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

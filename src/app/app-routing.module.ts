import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {RegistrationTypeComponent} from './registration-type/registration-type.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginTypeComponent} from './login-type/login-type.component';
import {RegistrationEmailComponent} from './registration-email/registration-email.component';
import {LoginEmailComponent} from './login-email/login-email.component';
import {RegCompleteComponent} from './reg-complete/reg-complete.component';
import {HomeComponent} from './home/home.component';
import {ScansComponent} from './scans/scans.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserEditComponent} from "./user-edit/user-edit.component";
import {PetDetailComponent} from "./pet-detail/pet-detail.component";
import {LostPetsComponent} from "./lost-pets/lost-pets.component";

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome',  component: WelcomeComponent },
  { path: 'registration', component: RegistrationTypeComponent },
  {path: 'registration-email', component: RegistrationEmailComponent },
  {path: 'registration-complete', component: RegCompleteComponent },
  { path: 'login', component: LoginTypeComponent },
  { path: 'login-email', component: LoginEmailComponent },
  { path: 'home', component: HomeComponent},
  { path: 'scans', component: ScansComponent},
  { path: 'user', component: UserDetailComponent },
  { path: 'user-edit', component: UserEditComponent },
  { path: 'pet/:id', component: PetDetailComponent},
  {path: 'lost-pets', component: LostPetsComponent}


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

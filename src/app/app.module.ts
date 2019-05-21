import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {MenubarModule, Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    MenuModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

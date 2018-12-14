import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SchTableComponent } from './sch-table/sch-table.component';
import { SchFiltersComponent } from './sch-filters/sch-filters.component';

import { OverlayPanelModule } from 'primeng/overlaypanel';

import { DataService } from './services/data-service';
import { HTTPConfigurationService } from './config/http-config-service';
import { TitleCasePipe } from './pipes/title-case-pipe';


@NgModule({
  declarations: [
    AppComponent,
    SchTableComponent,
    SchFiltersComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    OverlayPanelModule,
  ],
  providers: [ DataService, HTTPConfigurationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

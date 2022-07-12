import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './main/apps/body/body.component';
import { SidenavComponent } from './main/apps/sidenav/sidenav.component';
import { HomeComponent } from './main/apps/home/home.component';
import { ProductsComponent } from './main/apps/products/products.component';
import { StatisticsComponent } from './main/apps/statistics/statistics.component';
import { CoupensComponent } from './main/apps/coupens/coupens.component';
import { PagesComponent } from './main/apps/pages/pages.component';
import { MediaComponent } from './main/apps/media/media.component';
import { SettingsComponent } from './main/apps/settings/settings.component';
import { ErrorComponent } from './main/apps/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    HomeComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

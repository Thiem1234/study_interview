import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './main/apps/statistics/statistics.component';
import { PagesComponent } from './main/apps/pages/pages.component';
import { ErrorComponent } from './main/apps/error/error.component';
import { HomeComponent } from './main/apps/home/home.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './main/apps/products/products.component';
import { CoupensComponent } from './main/apps/coupens/coupens.component';
import { MediaComponent } from './main/apps/media/media.component';
import { SettingsComponent } from './main/apps/settings/settings.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'study', component: ProductsComponent},
  {path: 'tips', component: StatisticsComponent},
  {path: 'blog', component: CoupensComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

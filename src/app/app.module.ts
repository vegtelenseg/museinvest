import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CrowdPicksComponent } from '../crowd-picks/crowd-picks.component';
import { HomeComponent } from '../home/home.component';
import { FeaturedComponent } from '../featured/featured.component';
import { DiscoverComponent } from '../discover/discover.component';
import { SigninComponent } from '../join/login/login.component';
import { SignupComponent, SignAsArtistComponent, SignAsScouterComponent } from '../join/signup/signup.component';

const PresetRoutes = RouterModule.forRoot([
    {path: '',                    component: HomeComponent },
    {path: '/',                   component: HomeComponent },
    {path: '/featured',           component: FeaturedComponent},
    {path: '/picks',              component: CrowdPicksComponent},
    {path: '/discover',           component: DiscoverComponent},
    {path: '/signin',             component: SigninComponent},
    {path: '/signup',             component: SignupComponent},
    {path: '/signup/as-artist',   component: SignAsArtistComponent},
    {path: '/signup/as-scouter',  component: SignAsScouterComponent},
    {path: '/*',                  component: HomeComponent}
]);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrowdPicksComponent,
    FeaturedComponent,
    DiscoverComponent,
    SigninComponent,
    SignupComponent,
    SignAsArtistComponent,
    SignAsScouterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    PresetRoutes
  ],
 // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

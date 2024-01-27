import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpcomingmoviesComponent } from './components/upcomingmovies/upcomingmovies.component';
import { NowwatchingmoviesComponent } from './components/nowwatchingmovies/nowwatchingmovies.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import { CardforUpcomingMoviesComponent } from './components/cardfor-upcoming-movies/cardfor-upcoming-movies.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SingleproductpageComponent } from './pages/singleproductpage/singleproductpage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UpcomingmoviesComponent,
    NowwatchingmoviesComponent,
    HomeComponent,
    AboutusComponent,
    CardforUpcomingMoviesComponent,
    SingleproductpageComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 7,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#000000",
      animationDuration: 300,
      subtitle:"",
      titleFontSize:"12",
      backgroundColor:"#000000",
      titleColor:"#FFFFFF",
      unitsColor:"#FFFFFF"
      
    }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

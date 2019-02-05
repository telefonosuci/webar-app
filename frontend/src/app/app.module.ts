import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CoinDashboardComponent } from './components/coin-dashboard/coin-dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { CoinDeskService } from './services/coin-desk.service';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    CoinDashboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

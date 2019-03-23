import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { AccountOverviewComponent } from './components/account-overview/account-overview.component';
import { AccountCamerasComponent } from './components/account-cameras/account-cameras.component';
import { AccountNetworkComponent } from './components/account-network/account-network.component';
import { CameraComponent } from './components/camera/camera.component';
import { GatewayComponent } from './components/gateway/gateway.component';
import { OneColumnCardComponent } from './components/utilityComponents/one-column-card/one-column-card.component';
import { AccordianCardItemComponent } from './components/utilityComponents/accordian-card-item/accordian-card-item.component';
import { AccordianComponent } from './components/utilityComponents/accordian/accordian.component';
import { CardComponent } from './components/utilityComponents/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingComponent } from './components/utilityComponents/loading/loading.component';
import { CollapseExpandComponent } from './components/utilityComponents/icons/collapse-expand/collapse-expand.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AccountComponent,
    AccountOverviewComponent,
    AccountCamerasComponent,
    AccountNetworkComponent,
    CameraComponent,
    GatewayComponent,
    OneColumnCardComponent,
    AccordianCardItemComponent,
    AccordianComponent,
    CardComponent,
    SearchComponent,
    LoadingComponent,
    CollapseExpandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

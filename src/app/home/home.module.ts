import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx'
import { Network } from '@awesome-cordova-plugins/network/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  providers: [InAppBrowser, Network],
  declarations: [HomePage]
})
export class HomePageModule {}

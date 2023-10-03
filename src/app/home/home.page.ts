import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { App } from '@capacitor/app';
import { Network } from '@awesome-cordova-plugins/network/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private browser: InAppBrowser, private network: Network) {}

  ngOnInit(): void {
    // Verifico red para ver si cargo o no la web
    const isConnected = this.network.type !== 'none';

    if (isConnected) {
      // Si la conexion esta ok, cargo la web
      const browserInstance = this.browser.create(
        'https://cafeceros.com',
        '_self',
        'location=no,hidenavigationbuttons=true,hideurlbar=true,zoom=no,fullscreen=yes'
      );
      browserInstance.on('exit').subscribe((evt) => {
        App.exitApp();
      });
    } else {
      // Si no hay conexión redirijo a error.html
      window.location.href = 'assets/error.html';
    }
  }
}
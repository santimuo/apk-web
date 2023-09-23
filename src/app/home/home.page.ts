import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Platform } from '@ionic/angular'; // Importa Platform
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { App } from '@capacitor/app';

declare var window: any; // Declara 'window' como una variable global

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private browser: InAppBrowser,
    private network: Network,
    private platform: Platform // Inyecta Platform
  ) {}

  ngOnInit(): void {
    // Verifica la conexión de red
    const isConnected = this.network.type !== 'none';

    if (isConnected) {
      // Si hay conexión, abre la página principal
      const browserInstance = this.browser.create(
        'https://cafeceros.com',
        '_self',
        'location=no,hidenavigationbuttons=true,hideurlbar=true,zoom=no,fullscreen=yes'
      );
      browserInstance.on('exit').subscribe((evt) => {
        this.exitApp(); // Llama a la función para cerrar la aplicación
      });
    } else {
      // Si no hay conexión, se redirige automáticamente a la página de error.html
      window.location.href = 'assets/error.html';

      // Muestra la página de error por 3 segundos antes de cerrar la aplicación
      setTimeout(() => {
        this.exitApp(); // Llama a la función para cerrar la aplicación
      }, 3000);
    }
  }

  exitApp() {
    if (this.platform.is('cordova')) {
      // Comprueba si estamos en un entorno de Cordova
      App.exitApp(); // Cierra la aplicación utilizando Capacitor
    }
  }
}

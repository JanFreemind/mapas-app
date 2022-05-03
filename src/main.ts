import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiamFucGxvc2EiLCJhIjoiY2wyZzg1ZnA0MDBtMjNicDl3dnl5dDUwYSJ9.-JelnED5KNvNYWRY2OcJWg';

if ( !navigator.geolocation ) {
  alert('Navegador no soporta la Geolocalización');
  throw new Error('Navegador no soporta la Geolocalización');
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

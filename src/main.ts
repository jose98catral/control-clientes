import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'bootstrap/dist/js/bootstrap.bundle';

// Resto del código de inicialización de Angular


import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

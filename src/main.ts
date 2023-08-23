import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import navigation bar
import { NavbarComponent } from './app/navbar/navbar.component';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

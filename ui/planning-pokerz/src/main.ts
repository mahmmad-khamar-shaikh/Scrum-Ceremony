import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// import { AppComponent } from './app/app.component'; this is not required as standalone component feature is disabled.


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err=> console.error(err));
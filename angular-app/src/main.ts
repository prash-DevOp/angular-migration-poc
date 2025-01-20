import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';
import angular from 'angular';

// Import AngularJS module (adjust the path)
//import '../assets/app.js';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    // Bootstrap AngularJS
    const upgrade = platformRef.injector.get(UpgradeModule);
    upgrade.bootstrap(document.body, ['pocApp'], { strictDi: true });
  })
  .catch((err) => console.error(err));

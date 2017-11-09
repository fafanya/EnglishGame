import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './game/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
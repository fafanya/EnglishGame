import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './workbook/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
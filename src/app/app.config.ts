import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {ControlItemService} from "./services/control-item.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};

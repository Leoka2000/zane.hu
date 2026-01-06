import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {
  TranslateHttpLoader,
  provideTranslateHttpLoader,
} from '@ngx-translate/http-loader';

// ✅ Recommended: use new provideTranslateHttpLoader helper
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    ),
    provideClientHydration(),
    provideAnimationsAsync(),

    importProvidersFrom(HttpClientModule, TranslateModule.forRoot()),
    // 👇 Provide loader configuration here
    provideTranslateHttpLoader({
      prefix: './assets/i18n/', // Added ./ to ensure relative path from root
      suffix: '.json',
    }),
    provideAnimationsAsync(),
  ],
};

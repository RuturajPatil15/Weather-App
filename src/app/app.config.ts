import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),provideFirebaseApp(() => initializeApp({"projectId":"rpweather-998b8","appId":"1:397926975339:web:c7ae4bcc058c03342c2e2e","storageBucket":"rpweather-998b8.appspot.com","apiKey":"AIzaSyCSp4cN10tEGHRTTqJPLjuUZH94TKImUAo","authDomain":"rpweather-998b8.firebaseapp.com","messagingSenderId":"397926975339","measurementId":"G-WCSGN5BRBP"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFunctions(() => getFunctions())]
};

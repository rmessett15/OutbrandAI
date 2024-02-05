import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_x1ywXKCuby2qrU3PUAZCcauoYsjehGc",
  authDomain: "outbrand-ai-webcam-recorder.firebaseapp.com",
  databaseURL: "https://outbrand-ai-webcam-recorder-default-rtdb.firebaseio.com",
  projectId: "outbrand-ai-webcam-recorder",
  storageBucket: "outbrand-ai-webcam-recorder.appspot.com",
  messagingSenderId: "882113387268",
  appId: "1:882113387268:web:0f1d02ccd2504a582fce51",
  measurementId: "G-0FGF0H551R"
};

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

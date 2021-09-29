import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common';


const firebaseConfig = {
  apiKey: "AIzaSyCkDUJfk5wlLm01kMbSlEZjaK_amiRaPhM",
  authDomain: "firestarter-c360e.firebaseapp.com",
  projectId: "firestarter-c360e",
  storageBucket: "firestarter-c360e.appspot.com",
  messagingSenderId: "542785721701",
  appId: "1:542785721701:web:09a7d2e76cae33157ebd8c"
};

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

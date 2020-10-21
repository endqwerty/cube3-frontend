import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CubesComponent } from './cubes/cubes.component';
import { CardComponent } from './card/card.component';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterComponent } from './admin/register/register.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzghc1hHVKZ02WeaLc__VahvWAPFr7Jlw",
  authDomain: "cube3-9a6a0.firebaseapp.com",
  databaseURL: "https://cube3-9a6a0.firebaseio.com",
  projectId: "cube3-9a6a0",
  storageBucket: "cube3-9a6a0.appspot.com",
  messagingSenderId: "819705793559",
  appId: "1:819705793559:web:475b2746eb35acbf66e052",
  measurementId: "G-L2QB60H1E9"
};
@NgModule({
  declarations: [
    AppComponent,
    CubesComponent,
    CardComponent,
    RegisterComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    AdminComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, // auth
    AngularFirestoreModule, // firestore
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

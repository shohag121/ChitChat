import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig ={
  apiKey: "AIzaSyDfSyiwcBet2sSFofKTqP5gHk8qJPqKRMc",
  authDomain: "chitchat-c6246.firebaseapp.com",
  databaseURL: "https://chitchat-c6246.firebaseio.com",
  storageBucket: "chitchat-c6246.appspot.com",
  messagingSenderId: "988620228128"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

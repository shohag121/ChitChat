import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string = '';

  constructor(public af: AngularFire){
    this.items = af.database.list('/messages',{
      query: {
        limitToLast: 5
      }
    });

    this.af.auth.subscribe(auth => {
      if(auth){
        this.name = auth;
      }
    });


  }

  login(){
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
  }

  chatSend(thisMessage:string){
    this.items.push({message: thisMessage, name: this.name.facebook.fullName});
    this.msgVal = '';
  }

  logout(){
    this.af.auth.logout();
  }
}

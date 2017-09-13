import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
// import { Storage } from '@ionic/storage';
// import {StatusBar} from '@ionic-native/status-bar';
// import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';
// import {SplashPage} from "../pages/splash/splash";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(private platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      // splashScreen.show();
      // storage.get('firstIn').then((result) => {
      //   if (result) {
      //     this.rootPage = SplashPage;
      //   }
      //   else {
      //     storage.set('firstIn', true);
          this.rootPage = TabsPage;
      //   }
      // });
    });
  }
}

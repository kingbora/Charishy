/**
 * Created by wenbo.kuang on 2017/9/12.
 */
import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TabsPage} from "../tabs/tabs";

@Component({
  templateUrl: './splash.html'
})

export class SplashPage {
  constructor(public navCtr: NavController){
  }

  goToHome(){
    this.navCtr.setRoot(TabsPage);
  }
}

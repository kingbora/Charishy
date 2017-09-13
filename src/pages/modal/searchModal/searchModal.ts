/**
 * Created by wenbo.kuang on 2017/9/12.
 */
import {Component, ViewChild} from "@angular/core";
import {ViewController} from "ionic-angular";

@Component({
  templateUrl: 'searchModal.html'
})

export class SearchModal {
  @ViewChild('searchBar') searchBar;

  constructor(private viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    setTimeout(()=>{
      this.searchBar.setFocus();
      console.log(this.searchBar);
    },500);
  }

  onCancel(event: Event) {
    this.viewCtrl.dismiss();
  }
}

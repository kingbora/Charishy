import { Component } from '@angular/core';
import {ModalController} from 'ionic-angular';
import {SearchModal} from "../modal/searchModal/searchModal";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController) {

  }

  onFocus(event: Event) {
    let modal = this.modalCtrl.create(SearchModal);
    modal.present();
  }

}

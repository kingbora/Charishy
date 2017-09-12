import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {SearchModal} from "../modal/searchModal/searchModal";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }

  onInput(event: Event) {
    let modal = this.modalCtrl.create(SearchModal);
    modal.present();
  }

}

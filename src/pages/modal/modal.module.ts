import {NgModule} from "@angular/core";
import {SearchModal} from "./searchModal/searchModal";
import {IonicModule} from "ionic-angular";

@NgModule({
  declarations: [
    SearchModal
  ],
  imports: [
    IonicModule,
  ],
  entryComponents: [
    SearchModal
  ]
})

export class ModalModule {

}

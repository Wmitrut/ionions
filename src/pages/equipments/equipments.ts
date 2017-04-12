import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EquipmentNewPage } from '../equipment-new/equipment-new';
import { EquipmentListPage } from '../equipment-list/equipment-list';

/*
  Generated class for the Equipments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-equipments',
  templateUrl: 'equipments.html'
})
export class EquipmentsPage {

  tab1Listagem: any = EquipmentListPage;
  tab2Cadastro: any = EquipmentNewPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentsPage');
  }

}

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { EquipmentsPage } from '../equipments/equipments';
import { EquipmentNewPage } from '../equipment-new/equipment-new';
import { EquipmentListPage } from '../equipment-list/equipment-list';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  tab1Listagem: any = EquipmentListPage;
  tab2Cadastro: any = EquipmentNewPage;

  constructor(public navCtrl: NavController) {

  }

}

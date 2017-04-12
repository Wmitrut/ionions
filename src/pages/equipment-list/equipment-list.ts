import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EquipmentService } from '../../providers/equipment-service';
import { AlertController, LoadingController, PopoverController } from 'ionic-angular';
import { ListOptionsPage } from '../equipment-list/list-options';


@Component({
  selector: 'page-equipment-list',
  templateUrl: 'equipment-list.html'
})
export class EquipmentListPage {
  public equipments: any = [];
  public equipment: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public equipmentService : EquipmentService, public alertCtrl: AlertController, public popoverCtrl: PopoverController, public loadingCtrl: LoadingController) {
  
  }

  ionViewDidLoad() {

    this.equipmentService.findAllEquipment().subscribe(data => {
      this.equipments = data;
    });
  }

 presentOptions(myEvent, equipment) {
    let popover = this.popoverCtrl.create(ListOptionsPage);
    
    popover.present({
      ev: myEvent, 
    });
  }
}

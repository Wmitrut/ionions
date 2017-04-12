import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { EquipmentService } from '../../providers/equipment-service';

/*
  Generated class for the EquipmentNew page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-equipment-new',
  templateUrl: 'equipment-new.html'
})

export class EquipmentNewPage {
  equipment: {equipmentCode?: string, equipmentName?: string} = {};
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public equipmentService : EquipmentService, public toastCtrl: ToastController) {}


 createEquipmentToast() {
    let toast = this.toastCtrl.create({
      message: 'Equipamento criado com sucesso',
      duration: 3000
    });
    toast.present();
  }


 createEquipment(equipment){   
      this.createEquipmentToast();
      this.equipmentService.saveEquipment(this.equipment.equipmentCode, this.equipment.equipmentName).subscribe(data =>
      this.equipment = data);
  }


}

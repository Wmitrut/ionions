import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { EquipmentService } from '../../providers/equipment-service';

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="showAlertEdit()">Editar Equipamento</button>
      <button ion-item (click)="showAlertDelete()">Deletar Equipamento</button>
    </ion-list>
  `
})
export class ListOptionsPage {

  public equipment: any = {};
  constructor(public viewCtrl: ViewController, public alertCtrl: AlertController, public equipmentService : EquipmentService, public params: NavParams) {
    this.equipment = this.params.data.equipment;
  }

  close() {
    this.viewCtrl.dismiss();
  }

  showAlertEdit() {
    let prompt = this.alertCtrl.create({

      title: 'Editando Equipamento',
      message: "Altere as informações nos campos abaixo:",
      inputs: [
        {
          name: 'nameeee',
          placeholder: 'Nome'
        },{
          name: 'codeeee',
          placeholder: 'Código'
        },
      ],
      buttons: [
        {
          text: 'Salvar',
          handler: () => {
            console.log(this.equipment);
          }
        },
        {
          text: 'Cancelar',
          handler: data => {
            this.close();
          }
        }
      ]
    });
    prompt.present();
  }

  showAlertDelete() {

    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: 'Tem certeza que deseja excluir este registro?',
      buttons: [
        {
          text: 'Deletar',
          handler: () => {
            console.log('deleting...', this.equipment);
            //this.equipmentService.deleteEquipment("").subscribe(data => this.params = data);
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            this.close();
          }
        }
      ]
    });
    alert.present();
  }
}

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { EquipmentsPage } from '../pages/equipments/equipments';
import { EquipmentListPage } from '../pages/equipment-list/equipment-list';
import { EquipmentNewPage } from '../pages/equipment-new/equipment-new';
import { TabsPage } from '../pages/tabs/tabs';

import { EquipmentService } from '../providers/equipment-service';

import { ListOptionsPage } from '../pages/equipment-list/list-options';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EquipmentsPage,
    EquipmentNewPage,
    EquipmentListPage,
    ListOptionsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EquipmentsPage,
    EquipmentNewPage,
    EquipmentListPage,
    ListOptionsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    EquipmentService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

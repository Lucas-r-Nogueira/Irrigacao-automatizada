import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { CardSensorComponent } from '../../components/card-sensor/card-sensor.component'
import { CardHistoricoComponent } from 'src/app/components/card-historico/card-historico.component';
import { ModalSensorComponent } from 'src/app/components/modals/modal-sensor/modal-sensor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [HomePage,CardSensorComponent, CardHistoricoComponent, ModalSensorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}

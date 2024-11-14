import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheSensorPageRoutingModule } from './detalhe-sensor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DetalheSensorPage } from './detalhe-sensor.page';
import { ModalRotinaComponent } from 'src/app/components/modals/modal-rotina/modal-rotina.component';
import { CardRotinaComponent } from 'src/app/components/card-rotina/card-rotina.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheSensorPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [DetalheSensorPage, ModalRotinaComponent, CardRotinaComponent]
})
export class DetalheSensorPageModule {}

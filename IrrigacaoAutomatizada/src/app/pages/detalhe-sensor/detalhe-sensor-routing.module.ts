import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheSensorPage } from './detalhe-sensor.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheSensorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheSensorPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HlavniPage } from './hlavni.page';

const routes: Routes = [
  {
    path: '',
    component: HlavniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HlavniPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoaplikacePage } from './infoaplikace.page';

const routes: Routes = [
  {
    path: '',
    component: InfoaplikacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoaplikacePageRoutingModule {}

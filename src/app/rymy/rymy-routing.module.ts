import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RymyPage } from './rymy.page';

const routes: Routes = [
  {
    path: '',
    component: RymyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RymyPageRoutingModule {}

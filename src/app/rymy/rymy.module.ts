import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RymyPageRoutingModule } from './rymy-routing.module';

import { RymyPage } from './rymy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RymyPageRoutingModule
  ],
  declarations: [RymyPage]
})
export class RymyPageModule {}

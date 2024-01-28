import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoaplikacePageRoutingModule } from './infoaplikace-routing.module';

import { InfoaplikacePage } from './infoaplikace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoaplikacePageRoutingModule
  ],
  declarations: [InfoaplikacePage]
})
export class InfoaplikacePageModule {}

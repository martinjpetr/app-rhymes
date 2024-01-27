import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HlavniPageRoutingModule } from './hlavni-routing.module';

import { HlavniPage } from './hlavni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HlavniPageRoutingModule
  ],
  declarations: [HlavniPage]
})
export class HlavniPageModule {}

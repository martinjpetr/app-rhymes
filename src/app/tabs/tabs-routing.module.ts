import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'hlavni',
        loadChildren: () => import('../hlavni/hlavni.module').then(m => m.HlavniPageModule)
      },
      {
        path: 'rymy',
        loadChildren: () => import('../rymy/rymy.module').then(m => m.RymyPageModule)
      },
      {
        path: 'historie',
        loadChildren: () => import('../historie/historie.module').then(m => m.HistoriePageModule)
      },
      {
      path: 'infoaplikace',
        loadChildren: () => import('../infoaplikace/infoaplikace.module').then(m => m.InfoaplikacePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/hlavni',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/hlavni',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
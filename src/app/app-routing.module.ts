import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'hlavni',
    loadChildren: () => import('./hlavni/hlavni.module').then( m => m.HlavniPageModule)
  },
  {
    path: 'rymy',
    loadChildren: () => import('./rymy/rymy.module').then( m => m.RymyPageModule)
  },
  {
    path: 'historie',
    loadChildren: () => import('./historie/historie.module').then( m => m.HistoriePageModule)
  },
  {
    path: 'infoaplikace',
    loadChildren: () => import('./infoaplikace/infoaplikace.module').then( m => m.InfoaplikacePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

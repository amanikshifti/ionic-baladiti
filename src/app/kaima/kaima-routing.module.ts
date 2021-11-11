import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KaimaPage } from './kaima.page';

const routes: Routes = [
  {
    path: '',
    component: KaimaPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KaimaPageRoutingModule {}

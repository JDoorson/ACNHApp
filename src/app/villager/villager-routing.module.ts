import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillagerListComponent } from './villager-list/villager-list.component';

const routes: Routes = [
  { path: 'villager', component: VillagerListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillagerRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectableBugComponent } from './collectable-bug/collectable-bug.component';
import { CollectableFishComponent } from './collectable-fish/collectable-fish.component';
import { CollectableFossilComponent } from './collectable-fossil/collectable-fossil.component';
import { CollectableHomeComponent } from './collectable-home/collectable-home.component';

const routes: Routes = [
  { path: 'collectable', component: CollectableHomeComponent },
  { path: 'collectable/bug', component: CollectableBugComponent },
  { path: 'collectable/fish', component: CollectableFishComponent },
  { path: 'collectable/fossil', component: CollectableFossilComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectableRoutingModule { }

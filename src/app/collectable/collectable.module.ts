import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectableRoutingModule } from './collectable-routing.module';
import { CollectableFishComponent } from './collectable-fish/collectable-fish.component';
import { CollectableBugComponent } from './collectable-bug/collectable-bug.component';
import { CollectableFossilComponent } from './collectable-fossil/collectable-fossil.component';
import { CollectableHomeComponent } from './collectable-home/collectable-home.component';
import { CollectableService } from './collectable.service';


@NgModule({
  declarations: [
    CollectableFishComponent,
    CollectableBugComponent,
    CollectableFossilComponent,
    CollectableHomeComponent
  ],
  imports: [
    CommonModule,
    CollectableRoutingModule
  ],
  providers: [
    CollectableService,
  ]
})
export class CollectableModule { }

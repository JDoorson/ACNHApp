import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillagerRoutingModule } from './villager-routing.module';
import { VillagerListComponent } from './villager-list/villager-list.component';
import { VillagerListItemComponent } from './villager-list-item/villager-list-item.component';


@NgModule({
  declarations: [
    VillagerListComponent,
    VillagerListItemComponent
  ],
  imports: [
    CommonModule,
    VillagerRoutingModule
  ]
})
export class VillagerModule { }

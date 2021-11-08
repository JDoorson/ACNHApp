import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillagerRoutingModule } from './villager-routing.module';
import { VillagerListComponent } from './villager-list/villager-list.component';
import { VillagerListItemComponent } from './villager-list-item/villager-list-item.component';
import { VillagerService } from './villager.service';


@NgModule({
  declarations: [
    VillagerListComponent,
    VillagerListItemComponent
  ],
  imports: [
    CommonModule,
    VillagerRoutingModule
  ],
  providers: [
    VillagerService,
  ]
})
export class VillagerModule { }

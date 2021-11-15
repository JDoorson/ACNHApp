import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillagerRoutingModule } from './villager-routing.module';
import { VillagerListComponent } from './villager-list/villager-list.component';
import { VillagerListItemComponent } from './villager-list-item/villager-list-item.component';
import { VillagerService } from './villager.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { VillagerDialogComponent } from './villager-dialog/villager-dialog.component';

@NgModule({
  declarations: [
    VillagerListComponent,
    VillagerListItemComponent,
    VillagerDialogComponent
  ],
  imports: [
    CommonModule,
    VillagerRoutingModule,
    MatGridListModule,
  ],
  providers: [
    VillagerService,
  ]
})
export class VillagerModule { }

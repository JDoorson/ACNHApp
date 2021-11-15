import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';

import { VillagerRoutingModule } from './villager-routing.module';
import { VillagerListComponent } from './villager-list/villager-list.component';
import { VillagerListItemComponent } from './villager-list-item/villager-list-item.component';
import { VillagerService } from './villager.service';
import { VillagerDialogComponent } from './villager-dialog/villager-dialog.component';
import { SuperscriptDatePipe } from '../superscript-date.pipe';

@NgModule({
  declarations: [
    VillagerListComponent,
    VillagerListItemComponent,
    VillagerDialogComponent,
    SuperscriptDatePipe,
  ],
  imports: [
    CommonModule,
    VillagerRoutingModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [
    VillagerService,
  ]
})
export class VillagerModule { }

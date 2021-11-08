import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemArtComponent } from './item-art/item-art.component';
import { ItemHousewareComponent } from './item-houseware/item-houseware.component';
import { ItemWallmountedComponent } from './item-wallmounted/item-wallmounted.component';
import { ItemMiscComponent } from './item-misc/item-misc.component';
import { ItemHomeComponent } from './item-home/item-home.component';
import { ItemService } from './item.service';


@NgModule({
  declarations: [
    ItemArtComponent,
    ItemHousewareComponent,
    ItemWallmountedComponent,
    ItemMiscComponent,
    ItemHomeComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule
  ],
  providers: [
    ItemService,
  ]
})
export class ItemModule { }

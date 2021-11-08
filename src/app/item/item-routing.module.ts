import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemArtComponent } from './item-art/item-art.component';
import { ItemHomeComponent } from './item-home/item-home.component';
import { ItemHousewareComponent } from './item-houseware/item-houseware.component';
import { ItemMiscComponent } from './item-misc/item-misc.component';
import { ItemWallmountedComponent } from './item-wallmounted/item-wallmounted.component';

const routes: Routes = [
  { path: 'item', component: ItemHomeComponent },
  { path: 'item/art', component: ItemArtComponent },
  { path: 'item/houseware', component: ItemHousewareComponent },
  { path: 'item/misc', component: ItemMiscComponent },
  { path: 'item/wallmounted', component: ItemWallmountedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }

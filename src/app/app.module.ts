import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CollectableModule } from './collectable/collectable.module';
import { ItemModule } from './item/item.module';
import { VillagerModule } from './villager/villager.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollectableModule,
    ItemModule,
    VillagerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

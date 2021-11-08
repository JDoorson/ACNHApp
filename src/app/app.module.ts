import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { CollectableModule } from './collectable/collectable.module';
import { ItemModule } from './item/item.module';
import { VillagerModule } from './villager/villager.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    CollectableModule,
    ItemModule,
    VillagerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Villager } from '../villager';
import { VillagerService } from '../villager.service';

@Component({
  selector: 'app-villager-list',
  templateUrl: './villager-list.component.html',
  styleUrls: ['./villager-list.component.css']
})
export class VillagerListComponent implements OnInit {
  villagers: Villager[] | undefined;

  ngOnInit() {
    this.villagerService
      .getVillagers()
      //.subscribe((data: Villager[]) => this.villagers = { ...data });
      .subscribe(data => {this.villagers = Object.values(data);console.log(Object.values(data));});
  }

  constructor(private villagerService: VillagerService) {}
}

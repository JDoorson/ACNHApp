import { Component, OnInit } from '@angular/core';
import { Villager } from '../villager';
import { VillagerService } from '../villager.service';
import { MatDialog } from '@angular/material/dialog';
import { VillagerDialogComponent } from '../villager-dialog/villager-dialog.component';

@Component({
  selector: 'app-villager-list',
  templateUrl: './villager-list.component.html',
  styleUrls: ['./villager-list.component.css']
})
export class VillagerListComponent implements OnInit {
  villagers?: Villager[];

  constructor(
    private villagerService: VillagerService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.villagerService
      .getVillagers()
      .subscribe(data => { this.villagers = Object.values(data) });
  }

  onClick(villagerId: number) {
    console.log(`OnClick even worked with Id: ${villagerId}`);
    this.dialog.open(VillagerDialogComponent, {
      data: villagerId,
    })
  }
}

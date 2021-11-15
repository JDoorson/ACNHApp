import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Villager } from '../villager';
import { VillagerService } from '../villager.service';

@Component({
  selector: 'app-villager-dialog',
  templateUrl: './villager-dialog.component.html',
  styleUrls: ['./villager-dialog.component.css']
})
export class VillagerDialogComponent implements OnInit {
  villager?: Villager;

  constructor(
    private villagerService: VillagerService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) { }

  ngOnInit() {
    this.villagerService
      .getVillager(this.data)
      .subscribe(data => { this.villager = data });
  }
}

import { Component, OnInit } from '@angular/core';
import { Fish } from '../fish';
import { CollectableService } from '../collectable.service';

@Component({
  selector: 'app-collectable-fish',
  templateUrl: './collectable-fish.component.html',
  styleUrls: ['./collectable-fish.component.css']
})

export class CollectableFishComponent implements OnInit {
  fishes: Fish[] | undefined;

  ngOnInit() {
    this.collectableService
      .getAllFish()
      .subscribe(data => { this.fishes = Object.values(data) });
  }

  constructor(private collectableService: CollectableService) { }
}

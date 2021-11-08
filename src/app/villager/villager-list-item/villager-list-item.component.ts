import { Component, Input, OnInit } from '@angular/core';
import { Villager } from '../villager';

@Component({
  selector: 'app-villager-list-item',
  templateUrl: './villager-list-item.component.html',
  styleUrls: ['./villager-list-item.component.css']
})
export class VillagerListItemComponent {
  @Input() villager: Villager | undefined;
}

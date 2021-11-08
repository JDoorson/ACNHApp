import { Component, OnInit } from '@angular/core';
import { Bug } from '../bug';
import { CollectableService } from '../collectable.service';

@Component({
  selector: 'app-collectable-bug',
  templateUrl: './collectable-bug.component.html',
  styleUrls: ['./collectable-bug.component.css']
})
export class CollectableBugComponent implements OnInit {
  bugs: Bug[] | undefined;

  ngOnInit() {
    this.collectableService
      .getBugs()
      .subscribe(data => { this.bugs = Object.values(data) });
  }

  constructor(private collectableService: CollectableService) { }
}

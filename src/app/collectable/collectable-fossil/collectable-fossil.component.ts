import { Component, OnInit } from '@angular/core';
import { CollectableService } from '../collectable.service';
import { Fossil } from '../fossil';

@Component({
  selector: 'app-collectable-fossil',
  templateUrl: './collectable-fossil.component.html',
  styleUrls: ['./collectable-fossil.component.css']
})
export class CollectableFossilComponent implements OnInit {
  fossils: Fossil[] | undefined;

  ngOnInit() {
    this.collectableService
      .getFossils()
      .subscribe(data => { this.fossils = Object.values(data); console.log(data); });
  }

  constructor(private collectableService: CollectableService) { }
}

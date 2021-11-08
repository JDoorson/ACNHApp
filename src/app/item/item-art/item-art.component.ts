import { Component, OnInit } from '@angular/core';
import { Art } from '../art';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-art',
  templateUrl: './item-art.component.html',
  styleUrls: ['./item-art.component.css']
})
export class ItemArtComponent implements OnInit {
  allArt: Art[] | undefined;
  
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService
      .getAllArt()
      .subscribe(data => { this.allArt = Object.values(data) });
  }

}

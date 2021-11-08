import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHousewareComponent } from './item-houseware.component';

describe('ItemHousewareComponent', () => {
  let component: ItemHousewareComponent;
  let fixture: ComponentFixture<ItemHousewareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemHousewareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemHousewareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

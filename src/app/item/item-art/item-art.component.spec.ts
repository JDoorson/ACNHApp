import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemArtComponent } from './item-art.component';

describe('ItemArtComponent', () => {
  let component: ItemArtComponent;
  let fixture: ComponentFixture<ItemArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

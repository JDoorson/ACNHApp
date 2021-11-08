import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMiscComponent } from './item-misc.component';

describe('ItemMiscComponent', () => {
  let component: ItemMiscComponent;
  let fixture: ComponentFixture<ItemMiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMiscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWallmountedComponent } from './item-wallmounted.component';

describe('ItemWallmountedComponent', () => {
  let component: ItemWallmountedComponent;
  let fixture: ComponentFixture<ItemWallmountedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemWallmountedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWallmountedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectableFishComponent } from './collectable-fish.component';

describe('CollectableFishComponent', () => {
  let component: CollectableFishComponent;
  let fixture: ComponentFixture<CollectableFishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectableFishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectableFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

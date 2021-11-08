import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectableBugComponent } from './collectable-bug.component';

describe('CollectableBugComponent', () => {
  let component: CollectableBugComponent;
  let fixture: ComponentFixture<CollectableBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectableBugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectableBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

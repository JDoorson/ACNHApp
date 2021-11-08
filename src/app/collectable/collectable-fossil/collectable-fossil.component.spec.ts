import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectableFossilComponent } from './collectable-fossil.component';

describe('CollectableFossilComponent', () => {
  let component: CollectableFossilComponent;
  let fixture: ComponentFixture<CollectableFossilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectableFossilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectableFossilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

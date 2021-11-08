import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectableHomeComponent } from './collectable-home.component';

describe('CollectableHomeComponent', () => {
  let component: CollectableHomeComponent;
  let fixture: ComponentFixture<CollectableHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectableHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectableHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

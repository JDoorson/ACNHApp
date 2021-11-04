import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagerListItemComponent } from './villager-list-item.component';

describe('VillagerListItemComponent', () => {
  let component: VillagerListItemComponent;
  let fixture: ComponentFixture<VillagerListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagerListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

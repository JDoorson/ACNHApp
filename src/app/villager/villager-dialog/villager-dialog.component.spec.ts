import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagerDialogComponent } from './villager-dialog.component';

describe('VillagerDialogComponent', () => {
  let component: VillagerDialogComponent;
  let fixture: ComponentFixture<VillagerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

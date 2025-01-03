import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsciriptionComponent } from './insciription.component';

describe('InsciriptionComponent', () => {
  let component: InsciriptionComponent;
  let fixture: ComponentFixture<InsciriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsciriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsciriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

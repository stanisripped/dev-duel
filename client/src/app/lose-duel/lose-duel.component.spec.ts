import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoseDuelComponent } from './lose-duel.component';

describe('LoseDuelComponent', () => {
  let component: LoseDuelComponent;
  let fixture: ComponentFixture<LoseDuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoseDuelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoseDuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

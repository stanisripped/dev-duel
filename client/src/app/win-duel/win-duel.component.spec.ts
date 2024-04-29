import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinDuelComponent } from './win-duel.component';

describe('WinDuelComponent', () => {
  let component: WinDuelComponent;
  let fixture: ComponentFixture<WinDuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinDuelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinDuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

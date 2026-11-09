import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationPage } from './station';

describe('StationPage', () => {
  let component: StationPage;
  let fixture: ComponentFixture<StationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(StationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

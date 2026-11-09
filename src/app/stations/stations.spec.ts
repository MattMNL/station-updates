import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationsPage } from './stations';

describe('StationsPage', () => {
  let component: StationsPage;
  let fixture: ComponentFixture<StationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(StationsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

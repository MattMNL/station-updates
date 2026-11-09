import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationNoticeForm } from './station-notice-form';

describe('StationNoticeForm', () => {
  let component: StationNoticeForm;
  let fixture: ComponentFixture<StationNoticeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationNoticeForm],
    }).compileComponents();

    fixture = TestBed.createComponent(StationNoticeForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

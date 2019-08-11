import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTransporterComponent } from './home-transporter.component';

describe('HomeTransporterComponent', () => {
  let component: HomeTransporterComponent;
  let fixture: ComponentFixture<HomeTransporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTransporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTransporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

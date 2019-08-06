import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidencesComponent } from './evidences.component';

describe('EvidencesComponent', () => {
  let component: EvidencesComponent;
  let fixture: ComponentFixture<EvidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

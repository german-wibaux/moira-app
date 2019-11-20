import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasMoiraComponent } from './obras-moira.component';

describe('ObrasMoiraComponent', () => {
  let component: ObrasMoiraComponent;
  let fixture: ComponentFixture<ObrasMoiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasMoiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasMoiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasAmigosComponent } from './obras-amigos.component';

describe('ObrasAmigosComponent', () => {
  let component: ObrasAmigosComponent;
  let fixture: ComponentFixture<ObrasAmigosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasAmigosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

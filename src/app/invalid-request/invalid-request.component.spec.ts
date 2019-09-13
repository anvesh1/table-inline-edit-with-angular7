import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidRequestComponent } from './invalid-request.component';

describe('InvalidRequestComponent', () => {
  let component: InvalidRequestComponent;
  let fixture: ComponentFixture<InvalidRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

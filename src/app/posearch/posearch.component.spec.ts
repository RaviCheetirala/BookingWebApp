import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosearchComponent } from './posearch.component';

describe('PosearchComponent', () => {
  let component: PosearchComponent;
  let fixture: ComponentFixture<PosearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

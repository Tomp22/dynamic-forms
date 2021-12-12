import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiNGRXEntityComponent } from './api-ngrxentity.component';

describe('ApiNGRXEntityComponent', () => {
  let component: ApiNGRXEntityComponent;
  let fixture: ComponentFixture<ApiNGRXEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiNGRXEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiNGRXEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

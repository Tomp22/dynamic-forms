import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiNGRXDataComponent } from './api-ngrxdata.component';

describe('ApiNGRXDataComponent', () => {
  let component: ApiNGRXDataComponent;
  let fixture: ComponentFixture<ApiNGRXDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiNGRXDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiNGRXDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

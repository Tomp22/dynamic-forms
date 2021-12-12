import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramikiComponent } from './programiki.component';

describe('ProgramikiComponent', () => {
  let component: ProgramikiComponent;
  let fixture: ComponentFixture<ProgramikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

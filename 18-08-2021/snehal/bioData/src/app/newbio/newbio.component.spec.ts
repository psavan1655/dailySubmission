import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbioComponent } from './newbio.component';

describe('NewbioComponent', () => {
  let component: NewbioComponent;
  let fixture: ComponentFixture<NewbioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

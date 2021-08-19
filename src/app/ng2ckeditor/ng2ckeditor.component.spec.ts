import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2ckeditorComponent } from './ng2ckeditor.component';

describe('Ng2ckeditorComponent', () => {
  let component: Ng2ckeditorComponent;
  let fixture: ComponentFixture<Ng2ckeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2ckeditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2ckeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

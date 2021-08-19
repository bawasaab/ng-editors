import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ckeditor5angularComponent } from './ckeditor5angular.component';

describe('Ckeditor5angularComponent', () => {
  let component: Ckeditor5angularComponent;
  let fixture: ComponentFixture<Ckeditor5angularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ckeditor5angularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ckeditor5angularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsToDbComponent } from './add-products-to-db.component';

describe('AddProductsToDbComponent', () => {
  let component: AddProductsToDbComponent;
  let fixture: ComponentFixture<AddProductsToDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductsToDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductsToDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

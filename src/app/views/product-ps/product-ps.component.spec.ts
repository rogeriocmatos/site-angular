import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPsComponent } from './product-ps.component';

describe('ProductPsComponent', () => {
  let component: ProductPsComponent;
  let fixture: ComponentFixture<ProductPsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

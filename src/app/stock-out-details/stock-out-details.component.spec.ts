import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOutDetailsComponent } from './stock-out-details.component';

describe('StockOutDetailsComponent', () => {
  let component: StockOutDetailsComponent;
  let fixture: ComponentFixture<StockOutDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockOutDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockOutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

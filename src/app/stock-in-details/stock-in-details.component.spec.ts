import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInDetailsComponent } from './stock-in-details.component';

describe('StockInDetailsComponent', () => {
  let component: StockInDetailsComponent;
  let fixture: ComponentFixture<StockInDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockInDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockInDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

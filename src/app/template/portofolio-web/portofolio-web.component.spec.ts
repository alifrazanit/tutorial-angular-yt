import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioWebComponent } from './portofolio-web.component';

describe('PortofolioWebComponent', () => {
  let component: PortofolioWebComponent;
  let fixture: ComponentFixture<PortofolioWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofolioWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortofolioWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

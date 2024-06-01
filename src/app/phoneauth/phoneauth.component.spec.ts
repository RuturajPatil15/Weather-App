import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneauthComponent } from './phoneauth.component';

describe('PhoneauthComponent', () => {
  let component: PhoneauthComponent;
  let fixture: ComponentFixture<PhoneauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneauthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

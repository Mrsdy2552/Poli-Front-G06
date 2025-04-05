import { ComponentFixture, TestBed } from '@angular/core/testing';

import { eliminarComponent } from './eliminar.component';

describe('eliminarComponent', () => {
  let component: eliminarComponent;
  let fixture: ComponentFixture<eliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [eliminarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(eliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

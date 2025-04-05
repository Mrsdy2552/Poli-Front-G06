import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarModificarComponent } from './agregar-modificar.component';

describe('AgregarModificarComponent', () => {
  let component: AgregarModificarComponent;
  let fixture: ComponentFixture<AgregarModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarModificarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

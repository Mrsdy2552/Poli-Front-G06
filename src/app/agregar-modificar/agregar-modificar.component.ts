import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-modificar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-modificar.component.html',
  styleUrl: './agregar-modificar.component.css'
})
export class AgregarModificarComponent {
  producto = {
    nombre: '',
    fechaEntrada: '',
    precioUnitario: 0,
    categoria: '',
    stockTotal: 0
  };

  categorias: string[] = ['Alimentos', 'Electrónica', 'Ropa', 'Hogar', 'Otros'];

  agregarProducto() {
    console.log('Producto agregado:', this.producto);
    // Aquí podrías hacer la conexión con un servicio para guardar el producto
    alert('Producto agregado exitosamente');
  }

}

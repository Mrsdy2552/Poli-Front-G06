import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css',
  imports: [CommonModule, FormsModule, MenuComponent],
})
export class eliminarComponent {
  filtro: string = '';
  productos = [
    {
      nombre: 'sardinas',
      categoria: 'Enlatados',
      stock: 1050,
      fecha: '02/02/25',
    },
    { nombre: 'Frijol', categoria: 'Grano', stock: 5252, fecha: '02/02/25' },
    { nombre: 'papaya', categoria: 'Fruta', stock: 100, fecha: '02/02/25' },
    { nombre: 'leche', categoria: 'Lacteos', stock: 8000, fecha: '02/02/25' },
  ];
  productosFiltrados = [...this.productos];

  filtrarProductos() {
    const filtroLower = this.filtro.toLowerCase();
    this.productosFiltrados = this.productos.filter(
      (p) =>
        p.nombre.toLowerCase().includes(filtroLower) ||
        p.categoria.toLowerCase().includes(filtroLower)
    );
  }

  eliminarProducto(index: number) {
    const eliminado = this.productosFiltrados[index].nombre;
    this.productos = this.productos.filter((_, i) => i !== index);
    this.productosFiltrados = [...this.productos];
    alert(`Producto "${eliminado}" eliminado`);
  }
}

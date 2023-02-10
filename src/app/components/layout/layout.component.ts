import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';
import { EditarAlumnoComponent } from '../editar-alumno/editar-alumno.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  alumno: Alumno[] = [
    {
      nombre: 'Michael',
      apellido: 'Perez',
      nombreCompleto: "Nombre completo: ",
      edad: 28,
      curso: 'React',
      profesor: 'Andrés Pérez',
    },
    {
      nombre: 'Danny',
      apellido: 'Valencia',
      nombreCompleto: "Nombre completo: ",
      edad: 20,
      curso: 'React',
      profesor: 'David Marín',
    },
    {
      nombre: 'Rocío',
      apellido: 'Sandoval',
      nombreCompleto: "Nombre completo: ",
      edad: 31,
      curso: 'Angular',
      profesor: 'Oscar López',
    },
    {
      nombre: 'Mateo',
      apellido: 'Sánchez',
      nombreCompleto: "Nombre completo: ",
      edad: 32,
      curso: 'React',
      profesor: 'Jennifer Salas',
    },
    {
      nombre: 'Lorna',
      apellido: 'Zaragosa',
      nombreCompleto: "Nombre completo: ",
      edad: 39,
      curso: 'Javascript',
      profesor: 'Julia Rush',
    },
  ];

  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(
    this.alumno
  );
  columnas: string[] = [
    'nombre',
    'apellido',
    'nombreCompleto',
    'edad',
    'curso',
    'profesor',
    'acciones',
  ];

  constructor(private dialog: MatDialog) {}
  abrirModal(alumno: Alumno) {
    const dialogRef = this.dialog.open(EditarAlumnoComponent, {
      data: alumno,
    });
  }
}

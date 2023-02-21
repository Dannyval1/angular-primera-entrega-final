import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';
import { EditarAlumnoComponent } from '../editar-alumno/editar-alumno.component';
import { AgregarAlumnoComponent } from '../agregar-alumno/agregar-alumno.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  alumno: Alumno[] = [
    {
      id: 1,
      nombre: 'Michael',
      apellido: 'Perez',
      nombreCompleto: 'Nombre completo: ',
      edad: 28,
      curso: 'React',
      profesor: 'Andrés Pérez',
    },
    {
      id: 2,
      nombre: 'Danny',
      apellido: 'Valencia',
      nombreCompleto: 'Nombre completo: ',
      edad: 20,
      curso: 'React',
      profesor: 'David Marín',
    },
    {
      id: 3,
      nombre: 'Rocío',
      apellido: 'Sandoval',
      nombreCompleto: 'Nombre completo: ',
      edad: 31,
      curso: 'Angular',
      profesor: 'Oscar López',
    },
    {
      id: 4,
      nombre: 'Mateo',
      apellido: 'Sánchez',
      nombreCompleto: 'Nombre completo: ',
      edad: 32,
      curso: 'React',
      profesor: 'Jennifer Salas',
    },
    {
      id: 5,
      nombre: 'Lorna',
      apellido: 'Zaragosa',
      nombreCompleto: 'Nombre completo: ',
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

  constructor(public dialog: MatDialog) {}
  abrirModal(alumno: Alumno) {
    const dialogRef = this.dialog.open(EditarAlumnoComponent, {
      data: alumno,
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.alumno = result;
      console.log('The dialog  has Result', result);
      console.log('The dialog  has this.alumno', this.alumno);

    });
  }
/* 
  onNoClick() {
    const dialogRef = this.dialogRef.close();
  }
   */

  deleteItem(dato: Alumno) {
    this.alumno = this.alumno.filter(
      (item: Alumno) => item.id !== dato.id
    );
  }

  /* addRow() {
    const newRow = {
      id: this.alumno.length + 1,
      nombre: '',
      apellido: '',
      nombreCompleto: 'Nombre completo: ',
      edad: 0,
      curso: '',
      profesor: '',
      isEdit: true
    };
    this.dataSource = new MatTableDataSource<Alumno>([...this.alumno, newRow]);
    //this.alumno = [...this.alumno, newRow];
  } */

  // removeRow(id: number) {
  //   this.dataSource = this.dataSource.filter((u: { id: number; }) => u.id !== id);
  // }
  // item !== dato

  abrirModalParaAgregar() {
    const dialogRef = this.dialog.open(AgregarAlumnoComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      result.id = this.alumno.length + 1;
      this.alumno.push(result);
      console.log("this.alumno",this.alumno)
    });
  }

  addItem(dato: Alumno) {
    this.alumno.push(dato);
  }
}

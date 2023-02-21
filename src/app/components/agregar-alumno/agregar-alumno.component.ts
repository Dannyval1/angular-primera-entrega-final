import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {
  formularioAdd: FormGroup;

  constructor(private dialogRef: MatDialogRef<AgregarAlumnoComponent>) { 
    this.formularioAdd = new FormGroup({
      nombre: new FormControl(""),
      apellido: new FormControl(""),
      edad: new FormControl(""),
      curso: new FormControl(""),
      profesor: new FormControl(""),
    })}

  ngOnInit(): void {
  }

  saveNew() {
    this.dialogRef.close(this.formularioAdd.value);
  }

  closeNews() {
    this.dialogRef.close();
  }

  // addItem(dato: Alumno) {
  //   this.alumno.push(dato);
  // }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from './material.module';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { HeadingStylesDirective } from './directives/heading-styles.directive';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    EditarAlumnoComponent,
    NombreCompletoPipe,
    HeadingStylesDirective,
    AgregarAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

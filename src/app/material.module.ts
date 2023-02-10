import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatDialogModule],
  exports: [MatTableModule, MatButtonModule, MatIconModule, MatDialogModule],
})
export class MaterialModule {}

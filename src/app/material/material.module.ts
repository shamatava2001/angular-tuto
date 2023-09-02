import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table'



const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatTableModule
];


@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }

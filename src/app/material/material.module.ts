import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatAutocompleteModule } from "@angular/material/autocomplete"
import { MatButtonModule } from "@angular/material/button"
import { MatButtonToggleModule } from "@angular/material/button-toggle"
import { MatCardModule } from "@angular/material/card"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatDatepicker } from "@angular/material/datepicker"
import { MatDialogModule } from "@angular/material/dialog"
import { MatGridListModule } from "@angular/material/grid-list"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatTreeModule } from "@angular/material/tree";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatTreeModule
  ]
})
export class MaterialModule { }

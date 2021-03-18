import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

const materialModules = [
  FlexLayoutModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatExpansionModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class MaterialModule { }

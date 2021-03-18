import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/modules/material/material.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    // material schematics
    LayoutModule,
    MaterialModule
  ],
  exports: [
    MainLayoutComponent,
  ]
})
export class CoreModule { }
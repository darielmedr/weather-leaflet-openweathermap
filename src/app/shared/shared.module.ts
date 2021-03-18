import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';

const components = [
  CardComponent
];

const modules = [
  MaterialModule,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [components, modules]
})
export class SharedModule { }

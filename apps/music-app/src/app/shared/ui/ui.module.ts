import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ],
  exports:[
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class UiModule { }

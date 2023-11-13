import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSlideToggleModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    TooltipModule.forRoot(),
    PaginationModule,
    NgxSpinnerModule.forRoot({ type: 'ball-newton-cradle' }),
    MatDialogModule,
    TabsModule.forRoot()
  ],
  exports: [
    MatIconModule,
    MatSlideToggleModule,
    MatDialogModule,
    ToastrModule,
    TooltipModule,
    PaginationModule,
    NgxSpinnerModule,
    TabsModule
  ]
})
export class SharedModule { }
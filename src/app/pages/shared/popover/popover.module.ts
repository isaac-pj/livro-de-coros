import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PopoverPage } from './popover';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PopoverPage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
})
export class PopoverPageModule {}

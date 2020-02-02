import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [SearchComponent]
})
export class ComponentsModule { }

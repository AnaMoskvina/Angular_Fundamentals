import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ButtonComponent, InfoComponent, SearchComponent } from './components'

const COMPONENTS = [HeaderComponent, ButtonComponent, InfoComponent, SearchComponent]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }

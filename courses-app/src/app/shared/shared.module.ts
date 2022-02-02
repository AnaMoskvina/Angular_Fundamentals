import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ButtonComponent, InfoComponent, SearchComponent, ModalComponent } from './components';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

const COMPONENTS = [HeaderComponent, ButtonComponent, InfoComponent, SearchComponent, ModalComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}

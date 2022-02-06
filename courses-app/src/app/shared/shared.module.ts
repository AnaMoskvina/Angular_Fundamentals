import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ButtonComponent, InfoComponent, SearchComponent, ModalComponent } from './components';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { EmailValidatorDirective } from './directives/email-validator.directive';

const COMPONENTS = [HeaderComponent, ButtonComponent, InfoComponent, SearchComponent, ModalComponent];

@NgModule({
  declarations: [...COMPONENTS, EmailValidatorDirective],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [...COMPONENTS, EmailValidatorDirective]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}

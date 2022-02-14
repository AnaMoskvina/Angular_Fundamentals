import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { CreationDatePipe, StringJoinerPipe, DurationPipe } from './pipes';
import { EmailValidatorDirective, NameValidatorDirective, TogglePasswordDirective } from './directives';
import { HeaderComponent, ButtonComponent, InfoComponent, SearchComponent, ModalComponent } from './components';

const COMPONENTS = [HeaderComponent, ButtonComponent, InfoComponent, SearchComponent, ModalComponent];
const DIRECTIVES = [EmailValidatorDirective, NameValidatorDirective, TogglePasswordDirective];
const PIPES = [DurationPipe, CreationDatePipe, StringJoinerPipe];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [...COMPONENTS, ...DIRECTIVES, ...PIPES, CommonModule]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}

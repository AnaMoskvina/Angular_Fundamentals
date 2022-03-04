import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseModule } from './features/course/course.module';
import { reducers, effects } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';
// import { CoursesEffects } from './store/courses/courses.effects';
// import { coursesReducer } from './store/courses/courses.reducer';
// import { AuthEffects } from './auth/store/auth.effects';
// import { authReducer } from './auth/store/auth.reducer';
// import { AuthorsEffects } from './store/authors/authors.effects';
// import { authorsReducer } from './store/authors/authors.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CourseModule,
    StoreModule.forRoot({}), // !
    // EffectsModule.forRoot([]), // !
    StoreDevtoolsModule.instrument({ // settings from doc example
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: Window, useValue: window }
  ]
})
export class AppModule { }

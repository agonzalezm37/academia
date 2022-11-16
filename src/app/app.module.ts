import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './pages/course/course/course.component';
import { CourseIndexBarComponent } from './pages/course/course-index-bar/course-index-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseIndexBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

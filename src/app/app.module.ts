import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PhotographyComponent } from './photography/photography.component';
import { SayhelloComponent } from './sayhello/sayhello.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PhotographyComponent,
    SayhelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

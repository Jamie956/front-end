import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './main/app.component';
import { heroSwitchComponents } from './heros.component';
import { AppRoutingModule } from './app-routing.module';
import { ClickDirective, HighlightDirective } from './app.directive';
import { LongHeroesPipe } from './app.pipe';

@NgModule({
  declarations: [
    AppComponent,
    heroSwitchComponents,
    ClickDirective,
    HighlightDirective,
    LongHeroesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

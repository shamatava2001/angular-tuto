import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { setBackgroundDirective } from './customDirectives/setBackground.directive';
import { HighlightDirective } from './customDirectives/highlight.directive';
import { AppHoverDirective } from './customDirectives/appHover.directive';
import { ClassDirective } from './customDirectives/class.directive';
import { StyleDirective } from './customDirectives/style.directive';
import { IfDirective } from './customDirectives/if.directive';

@NgModule({
  declarations: [
    AppComponent,
    setBackgroundDirective,
    HighlightDirective,
    AppHoverDirective,
    ClassDirective,
    StyleDirective,
    IfDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

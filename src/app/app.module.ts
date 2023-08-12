import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoggingService } from './logging.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, DirectoryComponent, FilterPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

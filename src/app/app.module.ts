import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TruncatePipe } from './pipes/truncate.pipe';
import { LogrosService } from './services/logros.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogroComponent } from './logro/logro.component';
import { AppRoutingModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TruncatePipe,
    LogroComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [LogrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

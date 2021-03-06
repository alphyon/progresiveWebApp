import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogroComponent } from './logro/logro.component';

@NgModule({
  imports: [RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'logro', component: LogroComponent},
      {path: 'logro/:id', component: LogroComponent},
  ])],
  exports: [RouterModule]
})

export class AppRoutingModule { }

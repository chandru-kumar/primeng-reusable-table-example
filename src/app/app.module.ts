import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PrimeTableComponent } from './users/prime-table/prime-table.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PrimeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

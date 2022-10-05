import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PrimeTableComponent } from './users/prime-table/prime-table.component';
import {TableModule} from 'primeng/table';
import { CustomUsersComponent } from './users/custom-users/custom-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PrimeTableComponent,
    CustomUsersComponent
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

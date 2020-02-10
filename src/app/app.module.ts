import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { VenkatModule } from './departments/venkat.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VenkatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

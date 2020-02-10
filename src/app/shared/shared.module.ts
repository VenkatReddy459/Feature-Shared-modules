import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  //this will be exported to feature module called venkat.module.ts
  exports:[CommonModule,ReactiveFormsModule]
})
export class SharedModule { }

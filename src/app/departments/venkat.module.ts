import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
//import {ReactiveFormsModule} from '@angular/forms'
import { HiComponent } from './hi/hi.component';
import { HelloComponent } from './hello/hello.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HiComponent, HelloComponent],
  imports: [
    // CommonModule,
    //ReactiveFormsModule
    SharedModule
  ],
  //this exports statement should be mentioned//
  exports:[HiComponent]
})
export class VenkatModule { }

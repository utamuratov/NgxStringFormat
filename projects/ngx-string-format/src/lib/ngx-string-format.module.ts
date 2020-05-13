import { NgModule } from '@angular/core';
import { StringFormatPipe } from './pipes/string-format.pipe';



@NgModule({
  declarations: [StringFormatPipe],
  imports: [
  ],
  exports: [StringFormatPipe]
})
export class NgxStringFormatModule { }

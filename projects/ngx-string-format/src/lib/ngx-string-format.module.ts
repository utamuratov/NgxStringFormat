import { NgModule } from '@angular/core';
import { NgxStringFormatComponent } from './ngx-string-format.component';
import { StringFormatPipe } from './pipes/string-format.pipe';



@NgModule({
  declarations: [NgxStringFormatComponent, StringFormatPipe],
  imports: [
  ],
  exports: [NgxStringFormatComponent, StringFormatPipe]
})
export class NgxStringFormatModule { }

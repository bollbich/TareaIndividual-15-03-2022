import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina1Component } from 'src/app/components/pagina1/pagina1.component';
import { Pagina2Component } from 'src/app/components/pagina2/pagina2.component';
import { Pagina3Component } from 'src/app/components/pagina3/pagina3.component';
import { Pagina4Component } from 'src/app/components/pagina4/pagina4.component';
import { Pagina5Component } from 'src/app/components/pagina5/pagina5.component';



@NgModule({
  declarations: [
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    Pagina5Component
  ],
  exports:[
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    Pagina5Component
  ],
  imports: [
    CommonModule
  ]
})
export class PaginasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestimentosRoutingModule } from './investimentos-routing.module';
import { ListComponent } from './list/list.component';
import { ResgateComponent } from './resgate/resgate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';


@NgModule({
  declarations: [
    ListComponent,
    ResgateComponent
  ],
  imports: [
    CommonModule,
    InvestimentosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule
  ]
})
export class InvestimentosModule { }

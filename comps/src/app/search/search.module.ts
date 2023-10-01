import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchHomeComponent } from './search-home/search-home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [
    SearchHomeComponent,
    SearchBarComponent,
    PageListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }

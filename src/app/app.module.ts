import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { AgGridCommonComponent } from './ag-grid-common/ag-grid-common.component';
import { BasicGridComponent } from './basic-grid/basic-grid.component';
import { AppRoutingModule } from './app-routing.module';
import { ExampleArticle2Component } from './example-article-2/example-article-2.component';

@NgModule({
  declarations: [
    AppComponent,
    AgGridCommonComponent,
    BasicGridComponent,

    ExampleArticle2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

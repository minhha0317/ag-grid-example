import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { AgGridCommonComponent } from './ag-grid-common/ag-grid-common.component';
import { BasicGridComponent } from './basic-grid/basic-grid.component';
import { AppRoutingModule } from './app-routing.module';
import { ExampleArticle2Component } from './example-article-2/example-article-2.component';
import { ToastrModule } from 'ngx-toastr';
import { ExampleArticle3Component } from './article-3/example-article-3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AgGridCommonComponent,
    BasicGridComponent,

    ExampleArticle2Component,
    ExampleArticle3Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

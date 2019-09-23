import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicGridComponent } from './basic-grid/basic-grid.component';
import { ExampleArticle2Component } from './example-article-2/example-article-2.component';
import { ExampleArticle3Component } from './article-3/example-article-3.component';

const routes: Routes = [
  { path: 'basic-grid', component: BasicGridComponent },
  { path: 'article-2', component: ExampleArticle2Component },
  { path: 'article-3', component: ExampleArticle3Component },
  { path: '', pathMatch: 'full', redirectTo: 'basic-grid' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

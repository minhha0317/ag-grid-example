import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicGridComponent } from './basic-grid/basic-grid.component';

const routes: Routes = [
  { path: 'basic-grid', component: BasicGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

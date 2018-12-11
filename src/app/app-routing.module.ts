import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';

const routes: Routes = [
  { path: '', component: BlogpostListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

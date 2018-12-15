import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminComponent } from './admin/admin.component';
import { BlogpostEditComponent } from './blogpost-edit/blogpost-edit.component';

const routes: Routes = [
  { path: '', component: BlogpostListComponent },
  { path: 'blog-posts', component: BlogpostListComponent },
  { path: 'blog-posts/:id', component: BlogpostComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/blog-posts/:id', component: BlogpostEditComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

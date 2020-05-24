import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ShowQComponent } from './show-q/show-q.component';
import { NewQComponent } from './new-q/new-q.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'new', component: NewComponent},
  {path: 'show-q/:id', component: ShowQComponent},
  {path: 'new-q/:id', component: NewQComponent},
  { path: '', pathMatch: 'full', redirectTo: '/main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

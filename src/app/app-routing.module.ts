import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestAguilaComponent } from './components/request-aguila/request-aguila.component';


const routes: Routes = [
  { path: 'request-aguila', component: RequestAguilaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'request-aguila' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

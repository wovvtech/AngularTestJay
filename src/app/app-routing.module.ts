import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolllistComponent } from './polllist/polllist.component';

const routes: Routes = [{ path: '', component: PolllistComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

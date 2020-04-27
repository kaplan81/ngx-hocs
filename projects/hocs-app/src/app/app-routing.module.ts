import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestroyedComponent } from './destroyed/destroyed.component';
import { UnsubscriberComponent } from './unsubscriber/unsubscriber.component';

const routes: Routes = [
  {
    path: 'unsubscriber',
    component: UnsubscriberComponent,
  },
  {
    path: 'destroyed',
    component: DestroyedComponent,
  },
  {
    path: '**',
    redirectTo: 'unsubscriber',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

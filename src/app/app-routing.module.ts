import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [{
  path: 'lifeCycle',
  component: LifecycleComponent
  
},
{
  path: 'new',
  component: NewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

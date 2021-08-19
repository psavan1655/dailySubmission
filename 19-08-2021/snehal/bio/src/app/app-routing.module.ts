import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { NewbioComponent } from './newbio/newbio.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  {
    path: 'practice',
    component: PracticeComponent
  },
  {
    path: 'newbio',
    component: NewbioComponent
  },
  {
    path: 'child',
    component: ChildComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosMainComponent } from './views/todos-main/todos-main.component';
import { CounterComponent } from './views/counter/counter.component';

const routes: Routes = [
  {
    path: '',
    component: TodosMainComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {}

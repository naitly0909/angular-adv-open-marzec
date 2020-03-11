import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosMainComponent } from './views/todos-main/todos-main.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { UiModule } from '../../shared/ui/ui.module';
import { CounterComponent } from './views/counter/counter.component';

@NgModule({
  declarations: [
    TodosMainComponent,
    TodosListComponent,
    TodoItemComponent,
    TodoDetailsComponent,
    CounterComponent
  ],
  imports: [CommonModule, TodosRoutingModule,UiModule]
})
export class TodosModule {}

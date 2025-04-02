import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksFormComponent } from './tasks-form/tasks-form.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksStore } from './state/task.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TasksFormComponent,TasksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TasksStore],
})
export class AppComponent {
  title = 'task-manager-ngrx-signals-app';
}

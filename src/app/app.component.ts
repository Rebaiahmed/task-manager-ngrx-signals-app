import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksFormComponent } from './tasks-form/tasks-form.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksStore } from './state/task.store';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-root',
  imports: [MatToolbarModule,RouterOutlet,TasksFormComponent,TasksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TasksStore],
})
export class AppComponent {
  title = 'task-manager-ngrx-signals-app';
}

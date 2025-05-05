import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TasksStore } from '../state/task.store';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { Task } from '../task';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tasks-list',
  imports: [CommonModule, MatListModule, MatCheckboxModule,MatButtonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {

  private tasksStore = inject(TasksStore);
  tasks = this.tasksStore.tasks;


  toggleCompleted(task: Task, completed: boolean): void {
    //this.tasksStore.updateTask(task.id, { completed });
  }

  deleteTask(taskId: number): void {
    this.tasksStore.removeTodo(taskId);
  }

}

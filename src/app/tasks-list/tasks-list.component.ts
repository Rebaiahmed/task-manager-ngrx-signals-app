import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TasksStore } from '../state/task.store';
import { Task } from '../task';
@Component({
  selector: 'app-tasks-list',
  imports: [CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {

  private tasksStore = inject(TasksStore);
  tasks = this.tasksStore.tasks;


  toggleCompleted(task: Task, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.tasksStore.updateTask(task.id, { completed: isChecked });
  }

  deleteTask(taskId: number): void {
    this.tasksStore.removeTask(taskId);
  }

}

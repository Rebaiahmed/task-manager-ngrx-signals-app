import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksStore } from '../state/task.store';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-form',
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './tasks-form.component.html',
  styleUrl: './tasks-form.component.scss'
})
export class TasksFormComponent {

  taskControl = new FormControl('');
  tasksStore = inject(TasksStore);
  nextId: number = this.tasksStore.tasksCount()+1;

  addTask() {
    const taskTitle = this.taskControl.value || '';
    if (taskTitle) {
      const newTask: Task = {
        id: this.nextId++,
        title: taskTitle,
        completed: false
      };
      this.tasksStore.addTask(newTask);
      this.taskControl.reset('');
    
  }
}

}

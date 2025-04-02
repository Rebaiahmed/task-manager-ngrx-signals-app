import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TasksStore } from '../state/task.store';

@Component({
  selector: 'app-tasks-form',
  imports: [CommonModule, FormsModule,ReactiveFormsModule,MatInputModule, MatButtonModule],
  templateUrl: './tasks-form.component.html',
  styleUrl: './tasks-form.component.scss'
})
export class TasksFormComponent {

  taskControl = new FormControl('');
  newTaskTitle = signal(''); // Input signal
  tasksStore = inject(TasksStore);

  addTask() {
    if (this.newTaskTitle().trim()) {
      this.newTaskTitle.set(''); // Clear input after adding
    }
  }

}

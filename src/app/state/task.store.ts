import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Task } from '../task';
type TasksState = {
  tasks: Task[];
  nextId: number;
  filter: 'all' | 'active' | 'completed';
};

const initialState: TasksState = {
  tasks: [ {
    id: 1,
    title: 'Complete project report',
    completed: false
  },],
  nextId: 2,
  filter: 'all',
};

{ providedIn: 'root' }
export const TasksStore = signalStore(
  withDevtools('tasks'),
  withState(initialState),
  withComputed(({ tasks, filter }) => ({
    tasksCount: computed(() => tasks().length),
  })),
  withMethods((store) => ({
    addTodo(todo: Task): void {
        patchState(store, {
          tasks: [...store.tasks() as Task[], todo]
     });
    },
    removeTodo(id: number): void {
      patchState(store, {
        tasks: (store.tasks() as Task[]).filter(task => task.id !== id)
      });
    },
    updateTask(id: number, changes: Partial<Task>): void {
      patchState(store, {
        tasks: (store.tasks() as Task[]).map(task =>
          task.id === id ? { ...task, ...changes } : task
        )
      });
    }
})
))

import { signalStore, withState, withMethods, withComputed, patchState } from '@ngrx/signals';
import { Task } from '../task';

type TasksState = {
  tasks: Task[];
  nextId: number;
  filter: 'all' | 'active' | 'completed';
};

const initialState: TasksState = {
  tasks: [],
  nextId: 1,
  filter: 'all',
};

{ providedIn: 'root' }
export const TasksStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    addTask(title: string) {
        patchState(store, (state) => ({
          nextId: state.nextId + 1,
        }));
      },
  
})
))

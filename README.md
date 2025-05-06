# Task Manager App with NgRx Signal Store

This is a simple **Task Manager App** built using **Angular** and **NgRx Signal Store**, showcasing the new **Signal API** introduced in recent Angular versions for enhanced reactivity and performance.

For a detailed explanation, you can read the full blog here: [Task Manager App with NgRx Signal Store](https://ahmedrebai.medium.com/task-manager-app-with-ngrx-signal-store-%EF%B8%8F-2cc4bd551c1d)

## Features:
- Create, list, and delete tasks.
- Tasks are managed using NgRx Signal Store.
- Uses Bootstrap for UI styling.

## Signal Store Methods

In this project, we define the following **Signal Store methods** to manage the state of tasks:

### `addTask(task: Task): void`
Adds a new task to the store.

```ts
addTask(task: Task): void {
  patchState(store, {
    tasks: [...store.tasks() as Task[], task]
  });
}

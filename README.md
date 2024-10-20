# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# App Component

The `App` component is the main component of the Todo List application. It manages the state of tasks, handles task operations, and renders the UI.

## Dependencies
- `use-Effect`, `use-State` from React
- `uuidv4` from `uuid`
- `Task` and `TaskForm` components
- CSS styles from `App.css`

## State
- `tasks`: An array of task objects, each containing `name`, `done`, and `id` properties.

## Effects
- Loads tasks from `localStorage` on initial render.
- Saves tasks to `localStorage` whenever the `tasks` state changes.

## Functions
- `addTask(name)`: Adds a new task with the given name.
- `delTask(taskId)`: Deletes a task by its ID.
- `markAsDone(taskId, isDone)`: Marks a task as done or not done.
- `renameTask(taskId, newName)`: Renames a task.
- `message()`: Returns a motivational message based on the percentage of completed tasks.

## Render
- Displays the total number of tasks and the number of completed tasks.
- Renders the `TaskForm` component for adding new tasks.
- Renders a list of `Task` components for each task in the `tasks` state.

import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";

export const routes: Routes = [
  {
    path: '', // <your-domain.com>/
    component: NoTaskComponent
  },
  {
    path: "tasks", // <your-domain.com/tasks>
    component: TasksComponent,
  },
];

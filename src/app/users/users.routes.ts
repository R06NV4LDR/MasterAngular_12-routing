import { Routes } from "@angular/router";
import { resolveUserTasks } from "../tasks/tasks.component";
import {
  canLeaveEditPage,
  NewTaskComponent,
} from "../tasks/new-task/new-task.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "tasks",
    pathMatch: "full",
  },
  {
    path: "tasks", // <your-domain.com>/users/<uid>/<tasks>
    loadComponent: () =>
      import("../tasks/tasks.component").then((mod) => mod.TasksComponent),
    runGuardsAndResolvers: "paramsOrQueryParamsChange",
    resolve: {
      userTasks: resolveUserTasks,
    },
  },
  {
    path: "tasks/new",
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage],
  },
];

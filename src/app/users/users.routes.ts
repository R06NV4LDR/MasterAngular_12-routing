import { Routes } from "@angular/router";
import { TasksComponent } from "../tasks/tasks.component";
import { canLeaveEditPage, NewTaskComponent } from "../tasks/new-task/new-task.component";
import { resolveUserName } from "./user-tasks/user-tasks.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "tasks",
    pathMatch: "prefix",
  },
  {
    path: "tasks", // <your-domain.com>/users/<uid>/<tasks>
    component: TasksComponent,
    runGuardsAndResolvers: "paramsOrQueryParamsChange",
    resolve: {
      userTasks: resolveUserName,
    },
  },
  {
    path: "tasks/new",
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage]
  },
];

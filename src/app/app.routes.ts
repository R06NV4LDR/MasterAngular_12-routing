import { Routes } from "@angular/router";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";

export const routes: Routes = [
  {
    path: "", // <your-domain.com>/
    component: NoTaskComponent,
  },
  {
    path: "users/:userId",
    component: UserTasksComponent,
  },
  //   {
  //     path: "tasks", // <your-domain.com/tasks>
  //     component: TasksComponent,
  //   },
];

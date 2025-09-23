import { Routes } from "@angular/router";

import { routes as userRoutes } from "./users/users.routes";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
  {
    path: "", // <your-domain.com>/
    component: NoTaskComponent,
  },
  {
    path: "users/:userId", // <your-domain.com>/users/<uid>/
    component: UserTasksComponent,
    children: userRoutes,
    data: {
      message: "Hello!",
    },
    resolve: {
      userName: resolveUserName
    },
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
  //   {
  //     path: "tasks", // <your-domain.com/tasks>
  //     component: TasksComponent,
  //   },
];

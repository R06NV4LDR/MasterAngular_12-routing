import { Routes } from "@angular/router";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

export const routes: Routes = [
  {
    path: "", // <your-domain.com>/
    component: NoTaskComponent,
  },
  {
    path: "users/:userId", // <your-domain.com>/users/<uid>/
    component: UserTasksComponent,
    children: [
      {
        path: "tasks", // <your-domain.com>/users/<uid>/<tasks>
        component: TasksComponent,
      },
      {
        path: "tasks/new",
        component: NewTaskComponent,
      },
    ],
  },
  //   {
  //     path: "tasks", // <your-domain.com/tasks>
  //     component: TasksComponent,
  //   },
];

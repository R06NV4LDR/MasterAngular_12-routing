import { Component, computed, DestroyRef, inject, input } from "@angular/core";
import { UsersService } from "../users.service";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { RouterLink } from "../../../../node_modules/@angular/router/index";

@Component({
  selector: "app-user-tasks",
  standalone: true,
  templateUrl: "./user-tasks.component.html",
  styleUrl: "./user-tasks.component.css",
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  userName = input.required<string>();
  userId = input.required<string>();

  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);

  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name
  // );

  // ngOnInit(): void {
  //   console.log(this.activatedRoute);
  //   const subscription = this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap) => {
  //       this.userName =
  //         this.usersService.users.find((u) => u.id === paramMap.get("userId"))
  //           ?.name || "";
  //     },
  //   });
  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }
}

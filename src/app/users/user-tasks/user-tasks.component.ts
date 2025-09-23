import { Component, computed, DestroyRef, inject, input } from "@angular/core";
import { UsersService } from "../users.service";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-user-tasks",
  standalone: true,
  templateUrl: "./user-tasks.component.html",
  styleUrl: "./user-tasks.component.css",
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  // userName = input.required<string>();
  userId = input.required<string>();
  usersService = inject(UsersService)

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  userName = computed<string | undefined>(() =>
    this.usersService.users.find((u) => u.id === this.userId())?.name
  );

  // ngOnInit(): void {
  //   console.log(this.activatedRoute);
  //   const subscription = this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap) => {
  //       // Update userId signal instead of userName directly
  //       console.log(this.userId);
        
  //       // this.userId.set(paramMap.get("userId") || "");
  //     },
  //   });
  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }
}
   
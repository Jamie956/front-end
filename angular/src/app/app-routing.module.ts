import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RouteAComponent, RouteBComponent } from "./heros.component";

const routes: Routes = [
  { path: "", redirectTo: "/routea", pathMatch: "full" },
  { path: "routea", component: RouteAComponent },
  { path: "routeb", component: RouteBComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [
  { path: "people", pathMatch: "full", component: PeopleComponent },
  { path: "about", pathMatch: "full", component: AboutComponent },
  { path: "**", pathMatch: "full", component: PeopleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

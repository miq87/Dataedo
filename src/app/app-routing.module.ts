import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [
  { path: "people", component: PeopleComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: PeopleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

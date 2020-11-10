import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { ExperiencesComponent } from './experiences/experiences.component';

const routes: Routes = [
  // { path: '', redirectTo: 'experiences', pathMatch: 'full' },
  { path: '', component: EmptyComponent },
  { path: "experiences", component: ExperiencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

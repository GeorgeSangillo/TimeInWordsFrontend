import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEventTableComponent } from './view-event-table/view-event-table.component';
import { CreateEventComponent } from './create-event/create-event.component';


const routes: Routes = [
  { path: '', redirectTo: '/landingPage', pathMatch: 'full' },
  { path: 'landingPage', component: ViewEventTableComponent },
  { path: 'create', component: CreateEventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

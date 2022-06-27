import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'completed', component: TodosComponent},
  {path: '404', component: PageNotFoundComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

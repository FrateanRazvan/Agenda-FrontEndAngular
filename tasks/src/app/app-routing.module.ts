import { LoginPage } from './pages/login/login.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TasksPage } from './tasks/tasks.page';
import { AddTaskPage } from './pages/add.task.page.ts/add.task.page';
import { ViewTaskPage } from './pages/view.task.page.ts/view.task.page';
import { UpdateTaskPage } from './pages/update.task.page.ts/update.task.page';
import { AuthGuard } from './security.guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'tasks',
    component: TasksPage
  },
  {
    path: 'tasks/add',
    component: AddTaskPage
  },
  {
    path: 'tasks/view',
    component: ViewTaskPage
  },
  {
    path: 'tasks/update',
    component: UpdateTaskPage
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'members', 
    canActivate: [AuthGuard],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

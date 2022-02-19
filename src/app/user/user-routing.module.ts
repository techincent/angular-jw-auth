import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleBaseGuard } from '../_guards/role-base.guard';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent,
    canActivate: [RoleBaseGuard],
    data: {
      authorities: ['ROLE_CUSTOMER', 'ROLE_ADMIN']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

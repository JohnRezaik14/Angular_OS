import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/Home.component';
import { UsersListComponent } from './components/UsersList/UsersList.component';
import { AddUserComponent } from './components/AddUser/AddUser.component';
import { ErrorComponent } from './components/Error/Error.component';
import { EditUserComponent } from './components/EditUser/EditUser.component';
import { DeleteUserComponent } from './components/DeleteUser/DeleteUser.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'users/list', component: UsersListComponent },
      { path: 'users/add', component: AddUserComponent },
      { path: 'users/edit', component: EditUserComponent },
      { path: 'users/delete', component: DeleteUserComponent },
    ],
  },
  { path: '**', component: ErrorComponent },
];

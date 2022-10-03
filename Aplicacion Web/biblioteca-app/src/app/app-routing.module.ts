import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DevolutionsComponent } from './devolutions/devolutions.component';
import { HomeComponent } from './home/home.component';
import { LendingsComponent } from './lendings/lendings.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewBookComponent } from './new-book/new-book.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, {path: 'inicio', component: HomeComponent}, 
  {path: 'prestamos', component: LendingsComponent}, {path: 'devolucion', component: DevolutionsComponent},
  {path: 'libros', component: BooksComponent}, {path: 'usuarios', component: UsersComponent},
  {path: 'reportes', component: ReportsComponent}, {path: 'registro', component: NewUserComponent},
  {path: 'subir-libro', component: NewBookComponent}, {path: 'editar-usuario/:id', component: EditUserComponent},
  {path: 'editar-libro/:id', component: EditBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
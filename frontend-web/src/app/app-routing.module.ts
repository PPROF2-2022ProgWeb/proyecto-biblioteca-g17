import { SubirLibrosComponent } from './subir-libros/subir-libros.component';
import { SubirUsuariosComponent } from './subir-usuarios/subir-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';
import { LibrosComponent } from './libros/libros.component';
import { LendingsComponent } from './lendings/lendings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  {path:'home', component:WelcomeComponent}, {path:'', component:WelcomeComponent},
  {path:'lendings', component:LendingsComponent}, {path:'devolutions', component:DevolucionesComponent},
  {path:'users', component:UsuariosComponent}, {path:'books', component:LibrosComponent},
  {path:'reports', component:ReportesComponent}, {path:'users/up', component:SubirUsuariosComponent},
  {path:'books/up', component:SubirLibrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
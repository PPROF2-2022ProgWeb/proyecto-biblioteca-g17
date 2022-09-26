import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LendingsComponent } from './lendings/lendings.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LibrosComponent } from './libros/libros.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SubirLibrosComponent } from './subir-libros/subir-libros.component';
import { SubirUsuariosComponent } from './subir-usuarios/subir-usuarios.component';

//Date
import localeAr from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
registerLocaleData(localeAr, 'es');

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    WelcomeComponent,
    LendingsComponent,
    DevolucionesComponent,
    UsuariosComponent,
    LibrosComponent,
    ReportesComponent,
    SubirLibrosComponent,
    SubirUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

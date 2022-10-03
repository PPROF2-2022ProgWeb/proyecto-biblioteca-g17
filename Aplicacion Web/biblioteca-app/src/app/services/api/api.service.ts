import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { LibroI } from 'src/app/models/libro.interface';
import { PrestamoI } from 'src/app/models/prestamo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:8080/";

  constructor(private http : HttpClient) {}

  crearUsuario(form:UsuarioI):Observable<UsuarioI>{
    let direccion = this.url + "usuarios";
    return this.http.post<UsuarioI>(direccion, form);
  }

  obtenerUsuarios():Observable<UsuarioI[]>{
    let direccion = this.url + "usuarios";
    return this.http.get<UsuarioI[]>(direccion);
  }

  obtenerUsuario(id: any):Observable<UsuarioI>{
    let direccion = this.url + "usuarios/" + id;
    return this.http.get<UsuarioI>(direccion);
  }

  obtenerUsuariosPorNombre(nombre: any):Observable<UsuarioI[]>{
    let direccion = this.url + "usuarios/search?nombre=" + nombre;
    return this.http.get<UsuarioI[]>(direccion);
  }

  editarUsuario(form: UsuarioI):Observable<UsuarioI>{
    let direccion = this.url + "usuarios";
    return this.http.post<UsuarioI>(direccion, form);
  }

  borrarUsuario(id:any, form: UsuarioI):Observable<UsuarioI>{
    let direccion = this.url + "usuarios/" + id;
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: form
    }
    return this.http.delete<UsuarioI>(direccion, options);
  }

  crearLibro(form:LibroI):Observable<LibroI>{
    let direccion = this.url + "libros";
    return this.http.post<LibroI>(direccion, form);
  }

  obtenerLibros():Observable<LibroI[]>{
    let direccion = this.url + "libros";
    return this.http.get<LibroI[]>(direccion);
  }

  obtenerLibro(id: any):Observable<LibroI>{
    let direccion = this.url + "libros/" + id;
    return this.http.get<LibroI>(direccion);
  }

  obtenerLibrosPorTitulo(titulo: any):Observable<LibroI[]>{
    let direccion = this.url + "libros/search?titulo=" + titulo;
    return this.http.get<LibroI[]>(direccion);
  }

  editarLibro(form: LibroI):Observable<LibroI>{
    let direccion = this.url + "libros";
    return this.http.post<LibroI>(direccion, form);
  }

  borrarLibro(id:any, form: LibroI):Observable<LibroI>{
    let direccion = this.url + "libros/" + id;
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: form
    }
    return this.http.delete<LibroI>(direccion, options);
  }

  crearPrestamo(form:PrestamoI, fechaSalida:Date, fechaDevolucion:Date):Observable<PrestamoI>{
    let direccion = this.url + "prestamos";
    return this.http.post<PrestamoI>(direccion, {form, fechaSalida, fechaDevolucion});
  }

  obtenerPrestamos():Observable<PrestamoI[]>{
    let direccion = this.url + "prestamos";
    return this.http.get<PrestamoI[]>(direccion);
  }
}

import { Component, OnInit } from '@angular/core';
import { UsuarioI } from '../models/usuario.interface';
import { ApiService } from '../services/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from '../services/alerts/alerts.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  datosUsuario:UsuarioI | undefined;
  editarForm:any = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    documento: new FormControl(''),
    domicilio: new FormControl(''),
    telefono: new FormControl(''),
    id: new FormControl(''),
  })

  constructor(private activatedRoute: ActivatedRoute, private router: Router,private api: ApiService, private alerts:AlertsService) { }

  ngOnInit(): void {
    const btnToggle = document.querySelector('.toggle-btn');
    const edit = document.getElementById('edit-user');
    btnToggle?.addEventListener('click',() => {
      if(edit?.className != 'active'){
        edit?.classList.toggle('active')
      }
    })
    let usuarioId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.obtenerUsuario(usuarioId).subscribe(data => {
      this.datosUsuario = data;
      this.editarForm.setValue({
        'nombre': this.datosUsuario.nombre,
        'apellido': this.datosUsuario.apellido,
        'documento': this.datosUsuario.documento,
        'domicilio': this.datosUsuario.domicilio,
        'telefono': this.datosUsuario.telefono,
        'id': this.datosUsuario.id
      })
    })
  }

  postForm(form:UsuarioI){
    this.api.editarUsuario(form).subscribe( data =>(
      this.alerts.showSuccess("Usuario modificado correctamente", "Completado con exito"),
      this.router.navigate(['usuarios'])
    ), error =>(
      this.alerts.showError("No se pudo modificar el usuario", "Error al modificar usuario")
    ));
  }

  eliminarUsuario(){
    let datosUsuario:UsuarioI = this.editarForm.value;
    this.api.borrarUsuario(datosUsuario.id, datosUsuario).subscribe( data =>(
      this.alerts.showSuccess("Se elimino al usuario correctamente", "Completado con exito"),
      this.router.navigate(['usuarios'])
    ), error =>(
      this.alerts.showError("No se pudo eliminar al usuario", "Error al borrar usuario")
    ));
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioI } from '../models/usuario.interface';
import { ApiService } from '../services/api/api.service';
import { AlertsService } from '../services/alerts/alerts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  nuevoForm:any = new FormGroup({
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
    const register = document.getElementById('register-user');
    btnToggle?.addEventListener('click',() => {
      if(register?.className != 'active'){
        register?.classList.toggle('active')
      }
    })
  }

  postForm(form:UsuarioI){
    this.api.crearUsuario(form).subscribe(data =>(
      this.alerts.showSuccess("Usuario creado correctamente", "Completado con exito"),
      this.router.navigate(['usuarios'])
    ), error =>(
      this.alerts.showError("No se pudo crear el usuario", "Error al crear usuario")
    ))
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrestamoI } from '../models/prestamo.interface';
import { ApiService } from '../services/api/api.service';
import { AlertsService } from '../services/alerts/alerts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroI } from '../models/libro.interface';
import { UsuarioI } from '../models/usuario.interface';

@Component({
  selector: 'app-lendings',
  templateUrl: './lendings.component.html',
  styleUrls: ['./lendings.component.css']
})
export class LendingsComponent implements OnInit {

  nuevoForm:any = new FormGroup({
    usuario: new FormControl(''),
    libro: new FormControl(''),
    id: new FormControl('')
  })

  fechaSalida:any = new Date();
  fechaActual:any = new Date();
  fechaDevolucion:any = this.fechaActual.setDate(this.fechaActual.getDate() + 15);

  usuario:any = this.api.obtenerUsuario(this.nuevoForm['usuario']);
  libro:any =this.api.obtenerLibro(this.nuevoForm['libro']);

  constructor(private activatedRoute: ActivatedRoute, private router: Router,private api: ApiService, private alerts:AlertsService) { }

  ngOnInit(): void {
    const btnToggle = document.querySelector('.toggle-btn');
    const lendings = document.getElementById('lendings');
    btnToggle?.addEventListener('click',() => {
      if(lendings?.className != 'active'){
        lendings?.classList.toggle('active')
      }
    })
  }


  postForm(form:PrestamoI,fechaSalida:Date,fechaDevolucion:Date){
    this.api.crearPrestamo(form,fechaSalida,fechaDevolucion).subscribe(data=>(
      this.alerts.showSuccess("Prestamo hecho correctamente", "Completado con exito"),
      this.router.navigate(['reportes'])
    ), error =>(
      this.alerts.showError("No se pudo hacer el prestamo", "Error al realizar prestamo")
    ))
  }
}

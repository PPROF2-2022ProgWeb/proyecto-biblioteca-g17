import { Component, OnInit } from '@angular/core';
import { LibroI } from '../models/libro.interface';
import { ApiService } from '../services/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from '../services/alerts/alerts.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  nuevoForm: any = new FormGroup({
    titulo: new FormControl(''),
    autor: new FormControl(''),
    categoria: new FormControl(''),
    edicion: new FormControl(''),
    idioma: new FormControl(''),
    stock: new FormControl(''),
    disponibles: new FormControl(''),
    id: new FormControl(''),
  })

  constructor(private activatedRoute: ActivatedRoute, private router: Router,private api: ApiService, private alerts:AlertsService) { }

  ngOnInit(): void {
    const btnToggle = document.querySelector('.toggle-btn');
    const addBook = document.getElementById('register-book');
    btnToggle?.addEventListener('click',() => {
      if(addBook?.className != 'active'){
        addBook?.classList.toggle('active')
      }
    })
  }

  postForm(form:LibroI){
    this.api.crearLibro(form).subscribe(data =>(
      this.alerts.showSuccess("Libro subido correctamente", "Completado con exito"),
      this.router.navigate(['libros'])
    ), error => (
      this.alerts.showError("No se pudo subir el libro", "Error al subir libro")
    ))
  }

}

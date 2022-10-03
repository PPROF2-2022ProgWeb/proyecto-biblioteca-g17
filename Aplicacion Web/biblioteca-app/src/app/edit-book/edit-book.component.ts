import { Component, OnInit } from '@angular/core';
import { LibroI } from '../models/libro.interface';
import { ApiService } from '../services/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from '../services/alerts/alerts.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  datosLibro:LibroI | undefined;
  editarForm:any = new FormGroup({
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
    const editBook = document.getElementById('edit-book');
    btnToggle?.addEventListener('click',() => {
      if(editBook?.className != 'active'){
        editBook?.classList.toggle('active')
      }
    })
    let libroId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.obtenerLibro(libroId).subscribe(data =>{
      this.datosLibro = data;
      this.editarForm.setValue({
        'titulo': this.datosLibro.titulo,
        'autor': this.datosLibro.autor,
        'categoria': this.datosLibro.categoria,
        'edicion': this.datosLibro.edicion,
        'idioma': this.datosLibro.idioma,
        'stock': this.datosLibro.stock,
        'disponibles': this.datosLibro.disponibles,
        'id': this.datosLibro.id
      })
    })
  }

  postForm(form:LibroI){
    this.api.editarLibro(form).subscribe(data =>(
      this.alerts.showSuccess("Libro modificado correctamente", "Completado con exito"),
      this.router.navigate(['libros'])
    ), error =>(
      this.alerts.showError("No se pudo modificar el libro", "Error al modificar el libro")
    ));
  }

  eliminarLibro(){
    let datosLibro:LibroI = this.editarForm.value;
    this.api.borrarLibro(datosLibro.id, datosLibro).subscribe( data =>(
      this.alerts.showError("No se pudo eliminar al libro", "Error al borrar libro")
    ), error =>(
      this.alerts.showSuccess("Se elimino al libro correctamente", "Completado con exito"),
      this.router.navigate(['libros'])
    ));
  }

}

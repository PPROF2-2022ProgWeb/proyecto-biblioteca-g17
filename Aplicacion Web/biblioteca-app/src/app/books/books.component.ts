import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { LibroI } from '../models/libro.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  libros: LibroI[] = [];
  bookTitle: string = '';

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.obtenerLibros().subscribe(data => {
      this.libros = data;
      console.log(data);
    })
    const btnToggle = document.querySelector('.toggle-btn');
    const books = document.getElementById('books');
    btnToggle?.addEventListener('click',() => {
      if(books?.className != 'active'){
        books?.classList.toggle('active')
      }
    })
  }

  buscarLibro(){
    return this.api.obtenerLibrosPorTitulo(this.bookTitle).subscribe(data => {
      this.libros = data;
    })
  }

  editarLibro(id:number){
    this.router.navigate(['editar-libro', id]);
  }

  nuevoLibro(){
    this.router.navigate(['subir-libro']);
  }
}

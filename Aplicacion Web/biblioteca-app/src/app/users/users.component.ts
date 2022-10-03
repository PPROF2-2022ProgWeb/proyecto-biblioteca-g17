import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { UsuarioI } from '../models/usuario.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios: UsuarioI[] = [];
  userName: string = '';

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.obtenerUsuarios().subscribe(data => {
      this.usuarios = data;
      console.log(data)
    })
    const btnToggle = document.querySelector('.toggle-btn');
    const users = document.getElementById('users');
    btnToggle?.addEventListener('click',() => {
      if(users?.className != 'active'){
        users?.classList.toggle('active')
      }
    })
  }

  buscarUsuario(){
    return this.api.obtenerUsuariosPorNombre(this.userName).subscribe(data => {
      this.usuarios = data
    })
  }

  editarUsuario(id:number){
    this.router.navigate(['editar-usuario', id]);
  }

  nuevoUsuario(){
    this.router.navigate(['registro']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { PrestamoI } from '../models/prestamo.interface';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reportes:PrestamoI[] = [];


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.obtenerPrestamos().subscribe(data => {
      this.reportes = data;
    })
    const btnToggle = document.querySelector('.toggle-btn');
    const reports = document.getElementById('reports');
    btnToggle?.addEventListener('click',() => {
      if(reports?.className != 'active'){
        reports?.classList.toggle('active')
      }
    })
  }

}

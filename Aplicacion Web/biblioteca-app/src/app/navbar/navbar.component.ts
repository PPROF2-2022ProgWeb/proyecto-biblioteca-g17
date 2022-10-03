import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const btnToggle = document.querySelector('.toggle-btn');
    btnToggle?.addEventListener('click',() => {
      document.getElementById('sidebar')?.classList.toggle('active')
    })
  }


}

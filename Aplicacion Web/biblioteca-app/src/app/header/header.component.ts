import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const btnToggle = document.querySelector('.toggle-btn');
    btnToggle?.addEventListener('click',() => {
      document.getElementById('header')?.classList.toggle('active')
    })
  }

}
